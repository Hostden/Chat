import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, message:"My ferst post", lake:23},
  {id:2, message:"Hey its im", lake:30},
  {id:3, message:"Its okey", lake:14}

];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts}/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
