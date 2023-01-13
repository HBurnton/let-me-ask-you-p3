const { Category } = require('../models');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find({});
    }
  }
};

module.exports = resolvers;
