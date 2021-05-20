import React from "react";
import { Navbar } from "react-bootstrap";
import { logout } from "../../actions/auth/AuthActions";
import {connect} from "react-redux";

class Header extends React.Component<any> {

    constructor(props: any) {
        super(props);

        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        this.props.dispatch(logout());
    }

    render() {
        return (
            <header>
                <Navbar>
                    <div className="container-fluid">
                        <Navbar.Brand>
                            Signed in as: <strong>{this.props.username}</strong>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <button className="btn btn-outline-info" onClick={this.logOut}>Log out</button>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
        );
    }
}

function mapStateToProps(state: { auth: { user: any; }; }) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Header);
