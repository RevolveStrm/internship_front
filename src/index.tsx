import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const rootElement: Element | null = document.getElementById('root');

if (!rootElement)
    throw new Error("Please, add root element to public HTML file");

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </React.StrictMode>
);

