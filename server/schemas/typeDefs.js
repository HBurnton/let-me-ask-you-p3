const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    questions: [Question]!
  }

  type Question {
    _id: ID
    questionText: String
    questionAuthor: String
    createdAt: String
    answers: [Answer]!
  }

  type Answer {
    _id: ID
    answerText: String
    answerAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    questions(username: String): [Question]
    question(questionId: ID!): Question
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addQuestion(thoughtText: String!): Question
    addAnswer(thoughtId: ID!, commentText: String!): Question
    removeQuestion(thoughtId: ID!): Question
    removeAnswer(thoughtId: ID!, commentId: ID!): Question
  }
`;

module.exports = typeDefs;
