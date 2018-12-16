import mongoose from 'mongoose';
import { Path } from 'path-parser';
import { URL } from 'url';

import { authCheck, creditsCheck } from 'middlewares';
import { getSurveyTemplate } from 'services/emailTemplates';
import { Mailer } from 'services/Mailer';

const Survey = mongoose.model('surveys');

export default app => {
  app.get('/api/surveys', authCheck, async (req, res) => {
    const {
      skip = 0,
      limit = 5,
    } = req.query;

    const surveys = await Survey.find({ _user: req.user.id })
      .select({ recipients: false })
      .skip(+skip)
      .limit(+limit);
    
    res.send(surveys);
  });

  app.post('/api/surveys', authCheck, creditsCheck, async (req, res) => {
    const { user } = req;
    const { title, subject, body, recipientEmails } = req.body;
    const recipients = recipientEmails.split(',').map(email => ({ email: email.trim() }));

    const survey = new Survey({
      body,
      title,
      subject,
      recipients,
      _user: user.id,
    });

    const mailer = new Mailer(survey, getSurveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();

      user.credits -= 1;
      const updatedUser = await user.save();

      res.send(updatedUser);
    } catch (error) {
      res.status(422).send(error);
    }
  });

  app.post('/api/surveys/webhooks', (req, res) => {
    const pairs = new Set();

    const converter = ({ email, url }) => {
      const { pathname } = new URL(url);
      const match = new Path('/api/surveys/:surveyId/:choice').test(pathname);

      if (match) {
        return {
          email,
          ...match,
        };
      }
    };

    const predicate = ({ email, surveyId }) => {
      const pair = `${email}${surveyId}`;

      return pairs.has(pair) ? false : pairs.add(pair);
    };

    const findAndUpdate = ({ surveyId, email, choice }) => Survey.updateOne(
      {
        _id: surveyId,
        recipients: {
          $elemMatch: {
            email,
            responded: false,
          },
        },
        feedback: {
          $exists: true,
        },
      },
      {
        $inc: {
          [`feedback.${choice}`]: 1,
        },
        $set: {
          'recipients.$.responded': true,
          'lastRespondDate': Date.now(),
        },
      },
    ).exec();

    Object.values(req.body)
      .map(converter)
      .filter(Boolean)
      .filter(predicate)
      .forEach(findAndUpdate);
  });

  app.get('/api/surveys/answer/*', (req, res) => {
    res.send('Thanks for the answer!');
  });
};
