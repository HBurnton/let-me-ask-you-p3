const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }
    type Question {
        _id: ID
        questionText: String
        category: Category
        author: User
        voteCount: Int
    }
    type Answer {
        _id: ID
        answerText: String
        authorId: User
        questionId: Question
    }
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        categories: [Category]
        questions: [Question]
        questionsByUserId(author: ID!): [Question]
        questionsByCategory(category: ID!): [Question]
        users: [User]
        user(username: String!): User
        answers: [Answer]
        answersByQuestionId(questionId: ID!): [Answer]
        answersByUserId(authorId: ID!): [Answer]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addCategory(name: String!):Category
        addQuestion(questionText: String!, category: String!, author: String!):Question
        removeQuestion(id: ID!):Question
        createUser(username: String!, email: String!, password: String!): Auth
        removeUser(id: ID!):User
        addAnswer(answerText: String!, authorId: String!, questionId: ID!):Answer
    }
`;

module.exports = typeDefs;
