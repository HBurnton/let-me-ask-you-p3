import React, {useCallback} from 'react';
import { useQuery } from '@apollo/client';
import QuestionList from '../components/QuestionList';
import QuestionForm from '../components/QuestionForm';
import { Banner } from '../components/Banner';
import styled from 'styled-components';
import { Box, useMediaQuery } from "@mui/material";
import '../assets/css/Home.css';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth'

import { QUERY_QUESTIONS } from '../utils/queries';

const Home = () => {

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  const goToLogin = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const goToSignUp = useCallback(() => navigate('/signup', {replace: true}), [navigate]);
  
  const { loading, data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];

  if (Auth.loggedIn()) {
    return (    
      <div>
      <Banner />
      <Box>
        <Box
            width="100%"
            padding="2rem 6%"
            display={isNonMobileScreens ? "flex" : "block"}
            gap="0.5rem"
            justifyContent="center"
            sx={{border: "white"}}
          >
            <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
            </Box>
            <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
            > 
            </Box>
            {isNonMobileScreens && (
            <Box flexBasis="26%">
              <Box m="2rem 0" />
            </Box>
            )}
          </Box>
      </Box>
      </div>
    )
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
  
  
  

export default Home;



