const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const questionSchema = new Schema({
  questionText: {
    type: String,
    required: 'You Cannot Submit Nothing',
    minlength: 30,
    trim: true,
  },
  questionAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  answers: [
    {
      answerText: {
        type: String,
        required: true,
        minlength: 1,
      },
      answerAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Question = model('Question', thoughtSchema);

module.exports = Question;
