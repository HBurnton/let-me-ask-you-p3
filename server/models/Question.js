const { Schema, model } = require('mongoose');

const Answer = require('./Answer');
const User = require('./User');

const questionSchema = new Schema({
    questionText: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 140
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true       
    },
    answers: [Answer.schema],
    voteCount: {
        type: Number,
        default: 0
    },
},
    {
        timestamps: true
    }
);

const Question = model('Question', questionSchema);

module.exports = Question;