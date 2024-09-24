import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// creating a root that can just show the contets of your app or render the contents of your app basically the html 
// that you wrote in the app.js open app.js and come back here
// strict mode i s a mode which isused will get to know more about these in then upcoming videos
// </App> is similar to html tags to this is where react jsx comes into play bascially bringing programming into html 
//here root can be anyything so it isn't specific
const root = ReactDOM.createRoot(document.getElementById('root'));
// here create root expects to select a element and give it to it doesn't matter whether it is a div or not
root.render(
  <React.StrictMode>
    {/* here in the node modules we have scripts which actually have added index.js even we didn't mention it explicitly */}
    <App />
  </React.StrictMode>
);

reportWebVitals();
// in vite we don't have by default react scripts compare with 01vitereact project
// open vite indexedDB.js
