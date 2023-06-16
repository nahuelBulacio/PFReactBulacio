import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "base-de-datos-react-4b302.firebaseapp.com",
  projectId: "base-de-datos-react-4b302",
  storageBucket: "base-de-datos-react-4b302.appspot.com",
  messagingSenderId: "1028606222077",
  appId: process.env.FIREBASE_APP_ID,
  measurementId: "G-WW83XE27VR"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);