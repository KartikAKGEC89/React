import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Plus from './components/Plus';
import Isgoingout from './components/Isgoingout';
import Additem from './components/Additem';
import Image from './components/Image';
import Boxesdata from './components/Boxesdata';
import Messages from './components/Messages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Plus />
    <Isgoingout />
    <Additem />
    <Image />
    <Boxesdata />
    <Messages />
  </React.StrictMode>
);

