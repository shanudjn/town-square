import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MobileNav from './components/MobileNav/MobileNav';
import Sidebar from './components/Sidebar/Sidebar';
import Trending from './components/Trending/Trending';
import { useTheme } from './context/theme-context';
import Home from './pages/Home/Home';
import Notifications from './pages/Notifications/Notifications';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';

function App() {

  const { themeData: { primaryBg, primaryText } } = useTheme();

  return (
    <div className="App" style={{ color: primaryText, backgroundColor: primaryBg }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      {/* <Trending /> */}
      <MobileNav />

    </div>
  );
}

export default App;
