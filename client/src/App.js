import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';


function App() {
  return (
    <Router>
        <NavBar />
          <Routes>
            <Route 
              path='/home'
              element={<Home />}
              exact
            />
            {/* <Route 
              path='/profile'
              element={<Profile />}
            />
            <Route 
              path='/leaderboard'
              element={<Leaderboard />}
            /> */}
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

  );
}

export default App;
