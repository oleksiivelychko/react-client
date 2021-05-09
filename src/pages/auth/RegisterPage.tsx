import React from 'react';
import {Link} from "react-router-dom";

export default class RegisterPage extends React.Component {
  render(){
    return (
      <div className="auth">
        <form className="auth__form auth__form-signup">
          <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
          <input type="email" id="inputName" className="form-control" placeholder="Name" name="name" required />
          <input type="email" id="inputEmail" className="form-control" placeholder="Email" name="email" required />
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" required />
          <input type="password" id="inputPasswordConfirm" className="form-control" placeholder="Password confirm" name="password_confirm" required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
          <p className="mt-4 mb-3 text-muted"><Link to='/'>Go home</Link></p>
        </form>
      </div>
    );
  }
}
