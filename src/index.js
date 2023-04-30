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

let dialogs = [
  { id:1, name:"Dima"},
  { id:2, name:"Sasha"},
  { id:3, name:"Petya"},
  { id:4, name:"Lena"},
  { id:5, name:"Ivan"},
  { id:6, name:"Tanya"}
];

let message = [
  {id:1, message:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
  {id:2, message:"Exercitationem esse voluptatibus, modi porro minima magni dignissimos facere quas aliquam obcaecati, debitis eius ipsam animi ipsum harum possimus."},
  {id:3, message: "Pariatur, eligendi molestiae."},
  {id:4, message:"Hellow World!!"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} message={message}/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
