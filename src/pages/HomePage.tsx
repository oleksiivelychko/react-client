import React from 'react';
import logo from "../styles/app/logo.svg";
import './../styles/app/app.css';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Home page</h1>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
          </a>
        </header>
      </div>
    );
  }
}