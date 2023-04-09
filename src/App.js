import React from 'react';
import './App.css';
import Technologies from './components/Technologies.js';
import Heder from './components/Heder.js';

const App = () => {
  return (
    <div>
      <div><Heder /></div>
      <div><Footer /></div>
      <div><Technologies /></div>
    </div>
  );
}

const Footer = () => {
  return (
    <div>    
      <a href="#">add</a>
    </div>
  );
}

export default App;
