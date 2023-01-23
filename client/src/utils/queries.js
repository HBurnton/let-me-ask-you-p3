import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_QUESTIONS = gql`
  query Questions {
    questions {
      _id
      questionText
      category {
        _id
        name
      }
      author {
        _id
        username
      }
      voteCount
    }
  }
`;

export const QUERY_QUESTIONSBYUSERID = gql`
  query questionsByUserId($author: ID!) {
    questionsByUserId(author: $author) {
      _id
      questionText
      category {
        _id
        name
      }
      voteCount
    }
  }
`;

export const QUERY_QUESTIONSBYCATEGORY = gql`
  query questionsByCategory($category: ID!) {
    questionsByCategory(category: $category) {
      _id
      questionText
      author {
        _id
        username
      }
      voteCount
    }
  }
  `;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      password
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($_id: String) {
    user(_id: $id) {
      _id
      username
      password
      email
    }
  }
`;

export const QUERY_ANSWERS = gql`
  query answers {
    answers {
      _id
      answerText
      authorId {
        _id
        username
      }
      questionId {
        _id
        questionText
      }
    }
  }
`;

export const QUERY_ANSWERSBYQUESTIONID = gql`
  query answersByQuestionId($questionId: ID!) {
    answersByQuestionId(questionId: $questionId) {
        _id
        answerText
        authorId {
          _id
          username
        }
    }
  }
`;

export const QUERY_ANSWERSBYUSERID = gql`
  query answersByUserId($authorId: ID!) {
    answersByUserId(authorId: $authorId) {
        _id
        answerText
        questionId {
          _id
          questionText
        }
    }
  }
`;


