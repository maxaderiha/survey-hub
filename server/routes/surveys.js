import mongoose from 'mongoose';

import { authCheck, creditsCheck } from 'middlewares';

const Survey = mongoose.model('surveys');

export default app => {
  app.post('/api/surveys', authCheck, creditsCheck, async (req, res) => {
    const { title, emailSubject, body, recipientEmails } = req.body;

    const recipients = recipientEmails.split(',').map(email => ({
      email: email.trim(),
    }));

    const survey = new Survey({
      body,
      title,
      emailSubject,
      recipients,
      _user: req.user.id,
    });
  });
};
