import React, { useCallback } from 'react'
import Logo from '../assets/images/lmay-logo.png';
import styled from 'styled-components';
import { Box, useMediaQuery } from "@mui/material";
import '../assets/css/Home.css';
import { Banner } from '../components/Banner';
import { AddPost } from '../components/AddPost';
import { Posts } from '../components/Posts';
import { UserWidget } from '../components/UserWidget';
import { AdvertWidget } from '../components/utils/AdvertWidget';
import { TrendingPost } from '../components/TrendingPost';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth'


export const Home = () => {

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const navigate = useNavigate();
  const goToLogin = useCallback(() => navigate('/', {replace: true}), [navigate]);
  const goToSignUp = useCallback(() => navigate('/signup', {replace: true}), [navigate]);

if (Auth.loggedIn()) {
  return (    
    <div>
    <Banner />
    <TrendingPost />
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
            <UserWidget  picturePath={Logo} />
          </Box>
          <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
          > 
          <AddPost />
          <Posts />
          </Box>
          {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
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


