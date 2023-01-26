import React from 'react';

const AnswerList = ({ answers = [] }) => {
  if (!answers.length) {
    return <h3>No Answers Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Answers
      </h3>
      <div className="flex-row my-4">
        {answers &&
          answers.map((answer) => (
            <div key={answer._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {answer.answerAuthor} answered{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {answer.createdAt}
                  </span>
                </h5>
                <p className="card-body">{answer.answerText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AnswerList;
