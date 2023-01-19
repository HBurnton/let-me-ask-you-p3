import { gql } from '@apollo/client'

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
       login(username: $username, password: $password) {
        token
        user {
            _id
        }
       } 
    }
`
export const ADD_QUESTION = gql`
    mutation addQuestion(
        $questionText: String!, $category: String!, $author: String!) {
        addQuestion(questionText: $questionText, category: $category, author: $author) {
            question {
                _id
                questionText
                category {
                    name
                }
                author {
                    username
                }
                voteCount
            }
        }
    }
`

export const ADD_CATEGORY = gql`
    mutation addCategory($name: String!){
        addCategory(name: $name){
            category {
                _id
                name
            }
        }
    }
`

export const REMOVE_QUESTION = gql`
    mutation removeQuestion($removeQuestionId: ID!) {
        removeQuestion(id: $removeQuestionId) {
            _id
        }
    }
`

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user{
                _id
            }
        }
    }
`

export const REMOVE_USER = gql`
    mutation removeUser($removeUserId: ID!) {
        removeUser(id: $removeUserId) {
            _id
        }
    }
`

export const ADD_ANSWER = gql`
    mutation addAnswer($answerText: String!, $authorId: ID!, $questionId: ID!) {
        addAnswer(answerText: $answerText, authorId: $authorId, questionId: $questionId) {
            _id
            answerText
        }
    }
`