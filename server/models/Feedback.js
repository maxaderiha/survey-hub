import mongoose from 'mongoose';

const { Schema } = mongoose;

const feedback = new Schema({
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
});

export default feedback;
