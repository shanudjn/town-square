import React from 'react';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Trending from './components/Trending/Trending';
import { useTheme } from './context/theme-context';
import Home from './pages/Home/Home';

function App() {

  const { themeData: { primaryBg, primaryText } } = useTheme();

  return (
    <div className="App" style={{ color: primaryText, backgroundColor: primaryBg }}>
      <Sidebar />
      <Home />
      <Trending />
    </div>
  );
}

export default App;
