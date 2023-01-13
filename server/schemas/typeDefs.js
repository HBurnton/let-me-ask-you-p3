const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category{
        _id:ID
        name: String
    }
    type Question{
        _id: ID
        questionText: String
        category: Category
        author: User
        voteCount: Int
        answers: [Answer]
    }
    type Answer{
        _id: ID
        answerText: String
        author: User
        question: Question
    }
    type User{
        _id: ID
        username: String
        email: String
        questions: [Question]
        answers: [Answer]
    }

    type Query {
        categories: [Category]
        users: [User]
        questions: [Question]
        answers: [Answer]
    }
`;

module.exports = typeDefs;
