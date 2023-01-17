const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category{
        name: String
    }
    type Question{
        questionText: String
        category: Category
        author: User
        voteCount: Int
        answers: [Answer]
    }
    type Answer{
        answerText: String
        author: User
        question: Question
    }
    type User{
        username: String
        email: String
        password: String
        questions: [Question]
        answers: [Answer]
    }

    type Auth{
        token: ID
        user: User
    }

    type Query {
        categories: [Category]
        users: [User]
        user: User
        questions: [Question]
        question(_id: ID!): Question
        answers: [Answer]
    }

    type Auth {
        token: ID
        user: User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        addQuestion(username: String!, questionText: String!): User
    }
`;

module.exports = typeDefs;
