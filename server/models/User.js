const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');
const Question = require('./Question');
const Answer = require('./Answer')

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
    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question',
        required: true        
    }],
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer',
        required: true
    }],
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