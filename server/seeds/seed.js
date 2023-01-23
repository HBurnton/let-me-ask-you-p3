const db = require('../config/connection');
const { User, Category, Question, Answer } = require('../models');
const userSeeds = require('./userSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const questionSeeds = require('./questionSeeds.json');
const answerSeeds = require('./answerSeeds.json');

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

        console.log(userSeeds)

        for (let i=0; i < questionSeeds.length; i++) {
            // find User ID
            const userQuery = User.findOne({ username: questionSeeds[i].author})
            const userDoc = await userQuery.exec()
            // find Category ID
            const catQuery = Category.findOne({ name: questionSeeds[i].category})
            const catDoc = await catQuery.exec()
            // set ID to variable
            const userId = userDoc._id
            const catId = catDoc._id 
            // set author and category to ID variables
            questionSeeds[i].author = userId
            questionSeeds[i].category = catId

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
        console.error(err);
        process.exit(1)
    }

    console.log('seeds are strewn');
    process.exit(0)
})