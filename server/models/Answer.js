const { Schema, model } = require('mongoose');

const answerSchema = new Schema({
    answerText: {
        type: String,
        required: true,
        minlength: 1
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    }
},
    {
        timestamps: true
    }
);

const Answer = model('Answer', answerSchema);

module.exports = Answer;