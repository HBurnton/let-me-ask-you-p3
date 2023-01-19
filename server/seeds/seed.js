const db = require('../config/connection');
const { User, Category, Question, Answer } = require('../models');
const userSeeds = require('./userSeeds.json');
const ca

db.once('open', async () => {
    try {
        // clear db
        await User.deleteMany({});
        await Category.deleteMany({});
        await Question.deleteMany({});
        await Answer.deleteMany({});

        // seed
        await User.create(userSeeds);

        console.log('seeds are strewn');
        process.exit(0)
    } catch (err) {
        throw err
    }
})