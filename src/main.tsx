import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import rootReducer from './reducers/index.js'


const store = configureStore({
  reducer: rootReducer,
});

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
