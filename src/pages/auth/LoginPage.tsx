import React from 'react';
import {Link} from "react-router-dom";
import "../../styles/auth.scss";

export default class LoginPage extends React.Component {
  render(){
    return (
      <div className="auth">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email" required/>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
        <p className="mt-5 mb-3 text-muted"><Link to='/'>Go Back</Link></p>
      </form>
      </div>
    );
  }
}
