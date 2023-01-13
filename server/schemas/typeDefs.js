const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category{
        _id:ID
        name: String
    }

    type Query {
        categories: [Category]
    }
`;

module.exports = typeDefs;
