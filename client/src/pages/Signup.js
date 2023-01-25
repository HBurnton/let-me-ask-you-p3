import { useMutation } from '@apollo/client';
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import siteLogo from '../assets/images/lmay-logo.png';
// import Login from './Login';
import '../assets/css/Login.css';
import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations';

const Signup = (props) => {

  const [formState, setFormState] = useState({ email: '', username: '', password: ''});
  const [createUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token)
    } catch (e) {
      console.error(e)
    }
  }

  const navigate = useNavigate();
  const goToHome = useCallback(() => navigate('/', {replace: true}), [navigate])

  return (
    <div className='login-body'>
    <MainContainer>
      <WelcomeText>Let Me Ask You</WelcomeText>
      <Form onSubmit={handleSubmit}>
      <InputContainer>
        <Input type="email" name="email" placeholder="Email" value={formState.email} onChange={handleChange} />
        <Input type="username" name="username" placeholder="Username" value={formState.username} onChange={handleChange} />
        <Input type="password" name="password" placeholder="Password" value={formState.password} onChange={handleChange} />
      </InputContainer>
      <ButtonContainer>
        <Button type="Submit" value="submit">Sign Up</Button>
      </ButtonContainer>
      </Form>
      <HorizontalRule />
      <OrSignUp>Already have an Account?</OrSignUp>
      <ButtonContainer>
        <Button onClick={goToHome}>Login</Button>
      </ButtonContainer>
    </MainContainer>
    </div>
  );
}

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

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
  color: black;
  margin-top: -20px;
  font-weight: bolder;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
  margin: 10rem;
  margin-left: 0;
  margin-right: 0;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//not sure why its saying this isnt defined lol (bc it is)
// PascalCase

const OrSignUp = styled.div`
  cursor: pointer;
  margin-top: 20%;
  color: black;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, black 0%, white 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const Button = styled.button`
  background: black;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 30rem;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

const Input = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  margin: 2rem;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 40%;
`
export default Signup; 