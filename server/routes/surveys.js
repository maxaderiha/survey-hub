import mongoose from 'mongoose';

import { authCheck, creditsCheck } from 'middlewares';
import { getSurveyTemplate } from 'services/emailTemplates';
import { Mailer } from 'services/Mailer';

const Survey = mongoose.model('surveys');

export default app => {
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
    await mailer.send();
    await survey.save();

    user.credits -= 1;
    const updatedUser = await user.save();

    res.send(updatedUser);
  });

  app.get('/api/surveys/thank', (req, res) => {
    res.send('Thanks for the answer!');
  });
};
