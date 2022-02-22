import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IncrementBtn from './incrementCounter';
import DisplayName from './nameDisplay';
import Takeinput from './takeInput';

ReactDOM.render(
  <>
    {/* <App /> */}
    <IncrementBtn />
    <DisplayName initialname="WelCome Aditya" />
    <Takeinput />

  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
