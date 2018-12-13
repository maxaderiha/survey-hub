import mongoose from 'mongoose';

import { authCheck, creditsCheck } from 'middlewares';
import { getSurveyTemplate } from 'services/emailTemplates';
import { Mailer } from 'services/Mailer';

const Survey = mongoose.model('surveys');

export default app => {
  app.post('/api/surveys', authCheck, creditsCheck, async (req, res) => {
    const { title, subject, body, recipientEmails } = req.body;
    const recipients = recipientEmails.split(',').map(email => ({ email: email.trim() }));

    const survey = new Survey({
      body,
      title,
      subject,
      recipients,
      _user: req.user.id,
    });

    const mailer = new Mailer(survey, getSurveyTemplate(survey));
    await mailer.send();
  });
};
