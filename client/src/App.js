import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './pages/Login';
import Signup from './pages/Signup';
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
                path='/home'
                element={<Home />}
                exact
              />
              <Route
                path='/'
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
