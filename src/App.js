import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { useTheme } from './context/theme-context';
import Home from './features/tweet/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import Profile from './pages/Profile/Profile';

import { PrivateRoute } from './features/user/PrivateRoute/PrivateRoute';
// import Login from './pages/Login/Login';
import Login from './features/user/Login/Login'

function App() {

  const { themeData: { primaryBg, primaryText } } = useTheme();

  return (
    <div className="App" style={{ color: primaryText, backgroundColor: primaryBg }}>

      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
