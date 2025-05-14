import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ButtonComponent from './eventex/ButtonComponent';
import InputComponent from './eventex/InputComponent';
import Counter from './eventex/Counter';
import FormComponent from './eventex/FormComponent';
import Parent from './eventex/Parent';
import Toggle from './eventex/Toggle';
import MyButton from './eventex/MyButton';
import Toolbar from './chapter_09/Toolbar';
import LandingPage from './chapter_09/LandingPage';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InputComponent/>
    <ButtonComponent/>
    <Counter/>
    <FormComponent/>
    <Parent/>
    <MyButton/>
    <Toggle/>
    <LandingPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
