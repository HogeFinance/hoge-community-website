import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const helmetContext = {};
const GA_TRACKING_ID = process.env.REACT_APP_GA_KEY
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HelmetProvider context={helmetContext}>
      <div className="application">
        <Helmet > { 
          /* Google Analytics */ `
          <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
          </script>
          <meta property="og:title" content="Hoge Finance"/>
        `}</Helmet>
        <App />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
