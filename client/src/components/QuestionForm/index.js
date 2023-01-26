import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_QUESTION, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const QuestionForm = () => {
  const [questionText, setQuestionText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addQuestion, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addQuestion } }) {
      try {
        const { questions } = cache.readQuery({ query: QUERY_QUESTION });

        cache.writeQuery({
          query: QUERY_QUESTION,
          data: { questions: [addQuestion, ...questions] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, questions: [...me.questions, addQuestion] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addQuestion({
        variables: {
          questionText,
          questionAuthor: Auth.getProfile().data.username,
        },
      });

      setQuestionText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'questionText' && value.length <= 280) {
      setQuestionText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="questionText"
                placeholder="Here's a new question..."
                value={questionText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Question
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your questions. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default QuestionForm;
