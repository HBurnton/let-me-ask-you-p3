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
    
    type: Auth {
        token: ID
        user: User
    }

    type Mutation {
        addUser(
            username: String!,
            email: String!,
            password: String!,
        ): Auth
        login(
            username: String!, 
            password: String!
        ): Auth 
    }
`;

module.exports = typeDefs;
