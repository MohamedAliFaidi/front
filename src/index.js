import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios  from 'axios';

axios.defaults.baseURL='http://localhost:3000';
document.body.style.backgroundImage = "url('https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')";
document.body.style.backgroundSize = "cover";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
    <App />

);

