const { AuthenticationError } = require('apollo-server-express');
const { 
  Category, 
  User, 
  Question, 
  Answer
} = require('../models');

const { update } = require('../models/User');
const { signToken } = require('../utils/auth')

const resolvers = {
  // data finders

  Query: {
    // we need some parameters 'args,context,...'here, not sure what exactly yet but that'll be determined on where we go with the app 
    categories: async () => {
      return await Category.find({});
    },
    questions: async () => {
      return await Question.find({}).populate('category').populate('author');
      // return await Question.find({}).populate('category').populate('author').populate('answers');
    },
    users: async () => {
      return await User.find({});
    },
    user: async (parent, args, context) => {
      const foundUser = await User.findOne({
          $or: [{ _id: context.user ? context.user._id : args.id }, { username: args.username }],
        });
    
        if (!foundUser) {
          throw new AuthenticationError('Incorrect credentials');
        }
        return (foundUser);
    }, 
    answers: async () => {
      return await Answer.find({}).populate('authorId').populate('questionId');
    },
    answersByQuestionId: async (parent, {questionId}) => {
      return await Answer.find({ questionId: questionId })
    },
    answersByUserId: async (parent, {authorId}) => {
      return await Answer.find({ authorId: authorId })
    }
  },

  Mutation: {

    addCategory: async (parent, {name}) =>{
      return await Category.create({name})
    },
    addQuestion: async (parent, {questionText, category, author}) =>{
      let categoryId = await Category.findOne({name:category});
      let userId = await User.findOne({username:author})
      let newQuestion = await Question.create({questionText, category:categoryId, author: userId})
      // let testing3 = await User.findByIdAndUpdate(userId, {questions: newQuestion._id})
      return newQuestion
    },
    // addQuestion: async(parent, args, context) => {
    //   console.log(context.user);
    //   try {
    //     const updatedUser = await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { questions: args } },
    //       { new: true, runValidators: true }
    //     );
    //     return (updatedUser);
    //   } catch (err) {
    //     console.log(err);
    //     throw new AuthenticationError('incorrect credentials');
    //   }
    // },
    removeQuestion: async (parent, { id }) => {
      let removeAnswersByQuestionId = await Answer.deleteMany({ questionId: id })
      return Question.findOneAndDelete({ _id: id });
    },
    // addUser: async (parent, {username, password, email}) =>{
    //   return await User.create({username, password, email})
    // },
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)

      return { token, user }
    },

    removeUser: async (parent, { id }) => {
      let removeQuestionByUserId = await Question.deleteMany({ author: id})
      let removeAnswersByUserId = await Answer.deleteMany({ authorId: id })
      return User.findOneAndDelete({ _id: id });
    },
    addAnswer: async (parent, { answerText, authorId, questionId }) => {
      let user = await User.findOne({username:authorId})
      let question = await Question.findOne({_id:questionId})
      let newAnswer = await Answer.create({answerText, authorId: user, questionId: question})
      return newAnswer
    }

  }
};

module.exports = resolvers;