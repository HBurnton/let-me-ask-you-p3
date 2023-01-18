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
    users: async () => {
      return await User.find({})
    },
    // we also need a query for a single user and finding a single user so we can use this information to validate our
    // jwt later on so we can grant access to said user and take there data as they explore the site 
    user: async (parent, args, context) => {
      const foundUser = await User.findOne({
          $or: [{ _id: context.user ? context.user._id : args.id }, { username: args.username }],
        });
    
        if (!foundUser) {
          throw new AuthenticationError('Incorrect credentials');
        }
        return (foundUser);
    }, 
  },

  // data manipulators 

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)

      return { token, user }
    },
    addQuestion: async(parent, args, context) => {
      console.log(context.user);
      try {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { questions: args } },
          { new: true, runValidators: true }
        );
        return (updatedUser);
      } catch (err) {
        console.log(err);
        throw new AuthenticationError('incorrect credentials');
      }
    },
    //added login for the mutations 
    // i know that this seems like its not a manipulation but it is bc your changing STATE
     login: async(_parent, {username, password}) => {
       const user = await User.findOne({ username: username, password: password});

       if(!user) {
         throw new AuthenticationError('incorrect credentials');
       }

       const correctPw = await user.isCorrectPassword(password);

       if(!correctPw) {
         throw new AuthenticationError('incorrect credentials');
       }

       const token = signToken(user);

       return { token, user };
     }
    // we also need an addQuestion Mutation ...

    // and a addComment//or Answer(idk do we want to change this to comment i feel like answer is not as semantic) Mutation ...
  
  }
};

module.exports = resolvers;
