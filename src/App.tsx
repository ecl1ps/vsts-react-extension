/// <reference types="vss-web-extension-sdk" />

import React, { Component } from 'react';
import './App.css';
import 'script-loader!vss-web-extension-sdk/lib/VSS.SDK';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>{VSS.getWebContext().user.name}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
