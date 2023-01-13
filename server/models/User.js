const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');
const Question = require('./Question');
const Answer = required('./Answer')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    questions: [Question],
    answers: [Answer]
});



const User = mongoose.model('User', userSchema);

module.exports = User;