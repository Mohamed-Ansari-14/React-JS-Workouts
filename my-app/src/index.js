import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>       
        <App />
    </ContextProvider>
);
//2.Providing the Context.