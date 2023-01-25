import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONSBYVOTECOUNT } from '../utils/queries';
import '../assets/css/Leaderboard.css';
import styled from 'styled-components';
import Auth from '../utils/auth'


const Leaderboard = () => {
    const { loading, data } = useQuery(QUERY_QUESTIONSBYVOTECOUNT);

    const questionList = data?.questionsByVoteCount || [];

    console.log(questionList)
    const navigate = useNavigate();
    const goToLogin = useCallback(() => navigate('/', {replace: true}), [navigate]);
    const goToSignUp = useCallback(() => navigate('/signup', {replace: true}), [navigate]);
  if (Auth.loggedIn()){
    return (
        <div className="leaderBody">
        <MainContainer>
         <h1 className="white">Leaderboard</h1>
         {loading ? (
            <div>Loading...</div>
        ) : (
            <ul>
                <h2>Question</h2>
                <h2>ques</h2>
            {questionList.map((question) => {
                return (
                    <li key={question._id}>
                        {question.questionText}
                        {question.author.username}
                        {question.category.name}
                        {question.voteCount}
                    </li>
                )
            })}
        </ul>
        )}
        </MainContainer>
    </div>
    );
} else {
  return <>
  <LoginWarning>
  <p>You must be logged in to view this page.</p> 
  <br />
  <p>Please do one of the following to view this content:</p>
  <ButtonContainer>
    <button className="youShallNotPass" onClick={goToLogin}>LOGIN</button>
    <br />
    <button className="youShallNotPass" onClick={goToSignUp}>SIGNUP</button>
  </ButtonContainer>
  </LoginWarning>
  </>
}}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 30vw;
  justify-content: center;
  margin-top: 150px;
  background: rgba(255, 255, 255, 0.11);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 70vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 70vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginWarning = styled.div`
 display : flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 25vh;
`
export default Leaderboard;

