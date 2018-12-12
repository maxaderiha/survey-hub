import mongoose from 'mongoose';

import feedback from './Feedback';
import recipient from './Recipient';

const { Schema } = mongoose;

const survey = new Schema({
  title: String,
  body: String,
  emailSubject: String,
  recipients: [recipient],
  feedback,
  sentDate: {
    type: Date,
    default: Date.now,
  },
  lastRespondDate: {
    type: Date,
    default: null,
  },
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
});

mongoose.model('surveys', survey);
