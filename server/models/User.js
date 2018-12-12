import mongoose from 'mongoose';

const { Schema } = mongoose;

const user = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0,
  },
  emails: [{ value: String }],
});

mongoose.model('users', user);
