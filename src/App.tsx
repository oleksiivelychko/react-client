import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
