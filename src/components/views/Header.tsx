import React from "react";
import {Navbar} from "react-bootstrap";

export default class Header extends React.Component<any> {

    render() {
        return (
            <header>
                <Navbar>
                    <div className="container-fluid">
                        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#">{this.props.username}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>
        );
    }
}
