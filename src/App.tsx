import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route, Link
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import logo from './styles/app/logo.svg';
import './styles/app/app.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <Link to="/">Home</Link>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
