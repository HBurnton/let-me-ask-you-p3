const { AuthenticationError } = require('apollo-server-express');
const { User, Question } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('questions');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('questions');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Question.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { questionId }) => {
      return Question.findOne({ _id: questionId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('questions');
      }
      throw new AuthenticationError('You Must Be Logged In!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Login Failed. Please Check Username and Password');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addQuestion: async (parent, { questionText }, context) => {
      if (context.user) {
        const question = await Question.create({
          questionText,
          questionAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { questions: question._id } }
        );

        return question;
      }
      throw new AuthenticationError('Must Be Logged In To Do That!');
    },
    addAnswer: async (parent, { questionId, answerText }, context) => {
      if (context.user) {
        return Question.findOneAndUpdate(
          { _id: questionId },
          {
            $addToSet: {
              comments: { answerText, answerAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You should be logged in to do this fool!');
    },
    removeQuestion: async (parent, { questionId }, context) => {
      if (context.user) {
        const question = await Question.findOneAndDelete({
          _id: questionId,
          questionAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { questions: question._id } }
        );

        return question;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { questionId, answerId }, context) => {
      if (context.user) {
        return Question.findOneAndUpdate(
          { _id: questionId },
          {
            $pull: {
              comments: {
                _id: answerId,
                answerAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
