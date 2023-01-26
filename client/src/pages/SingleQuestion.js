import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AnswerList from '../components/AnswerList';
import AnswerForm from '../components/AnswerForm';

import { QUERY_SINGLE_QUESTION } from '../utils/queries';

const SingleQuestion = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { questionId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_QUESTION, {
    // pass URL parameter
    variables: { questionId: questionId },
  });

  const question = data?.question || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {question.questionAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this question on {question.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {question.questionText}
        </blockquote>
      </div>

      <div className="my-5">
        <AnswerList answers={question.answers} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <AnswerForm questionId={question._id} />
      </div>
    </div>
  );
};

export default SingleQuestion;
