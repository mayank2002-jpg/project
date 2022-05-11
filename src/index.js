import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/navbar';
import Form from './Components/form';
import Dummy from './Components/dummy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className='main-section'>
      <Form />
      <Dummy />
    </div>
  </React.StrictMode>
);

reportWebVitals();
