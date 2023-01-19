const db = require('../config/connection');
const { User, Category, Question, Answer } = require('../models');
const userSeeds = require('./userSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const questionSeeds = require('./questionSeeds.json')

db.once('open', async () => {
    try {
        // clear db
        await User.deleteMany({});
        await Category.deleteMany({});
        await Question.deleteMany({});
        await Answer.deleteMany({});

        // seed users and categories
        await User.create(userSeeds);
        await Category.create(categorySeeds);

        for (let i=0; i < questionSeeds,length; i++) {
            const { _id, author } = await Question.create(questionSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: author },
                {
                    $addToSet: {
                        questions: _id,
                    }
                }
            )
        }
    } catch (err) {
        console.err(err);
        process.exit(1)
    }

    console.log('seeds are strewn');
    process.exit(0)
})