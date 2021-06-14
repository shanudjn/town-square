import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/theme-context';
import { BrowserRouter as Router } from "react-router-dom";


console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>

    </ThemeProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

