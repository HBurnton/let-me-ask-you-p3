const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');
// changing this up so we dont have to have any requiring below in the model 
// bc any new user is not going to have questions tied to it which will be an issue 
// and its less code to just write [...Schema]
const questionSchema = require('./Question');
const answerSchema = require('./Answer')

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
    questions: [questionSchema],
    answers: [answerSchema],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltrounds = 10;
        this.password = await bcrypt.hash(this.password, saltrounds);
    }

    next();
})

userSchema.methods.isCorrectPassword = async function (password) {
        return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User;