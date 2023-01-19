const { Schema, model } = require('mongoose');
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
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true       
    },
    // answers: [
    //     {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Answer'
    //     }
    // ],
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