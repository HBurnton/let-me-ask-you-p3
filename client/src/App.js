import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Leaderboard from './pages/Leaderboard';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <NavBar />
            <Routes>
              <Route 
                path='/'
                element={<Home />}
                exact
              />
              {/* <Route 
                path='/profile'
                element={<Profile />}
              />*/}
              <Route 
                path='/leaderboard'
                element={<Leaderboard />}
              /> 
              <Route
                path='/login'
                element={<Login />}
                exact
              />
              <Route
                path='/signup'
                element={<Signup />}
              />
            </Routes>
      </Router>
    </ApolloProvider>

  );
}

export default App;
