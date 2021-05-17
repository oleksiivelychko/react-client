import React from "react";
import logo from "../../styles/app/logo.svg";
import {Link} from "react-router-dom";

export default class NotFoundPage extends React.Component<any> {

    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h1>Error 404. Page not found.</h1>
                    <a
                        className='App-link'
                        href='/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                    </a>
                    <Link to='/'>Back to home</Link>
                </header>
            </div>
        );
    }
}
