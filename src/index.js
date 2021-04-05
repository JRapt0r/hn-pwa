import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
    <BrowserRouter basename={process.env.MODE === 'gh-pages' ? `/${process.env.REPO_NAME}` : ""}>
        <React.StrictMode><App /></React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorkerRegistration.register();
