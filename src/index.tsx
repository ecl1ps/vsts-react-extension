import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Initialize the VSS sdk
VSS.init({
    usePlatformScripts: true,
    usePlatformStyles: true
});

VSS.ready(function() {
    ReactDOM.render(<App />, document.getElementById('root'));
});

/*VSS.require(["dist/appx"], function () { 
    console.log("Require done")
});*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
