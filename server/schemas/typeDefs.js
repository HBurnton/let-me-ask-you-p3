const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        name: String
    }
    type Question {
        questionText: String
        category: Category
        author: User
        voteCount: Int
        answers: [Answer]
    }
    type Answer {
        answerText: String
        author: User
        question: Question
    }
    type User {
        username: String
        email: String
        password: String
        questions: [Question]
    }

    type Auth {
        token: ID!
        user: User
    }
    type Query {
        categories: [Category]
        questions: [Question]
        users: [User]
        user: User
        answers: [Answer]
        answersByQuestionId(questionId: ID!): [Answer]
        answersByUserId(authorId: ID!): [Answer]
    }

    type Mutation {

        addCategory(name: String!):Category
        addQuestion(questionText: String!, category: String!, author: String!):Question
        removeQuestion(id: ID!):Question
        createUser(username: String!, email: String!, password: String!): Auth
        removeUser(id: ID!):User
        addAnswer(answerText: String!, authorId: String!, questionId: ID!):Answer
    }
`;

module.exports = typeDefs;
