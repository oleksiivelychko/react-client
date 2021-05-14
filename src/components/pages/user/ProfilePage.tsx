import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProfilePage extends React.Component {

    render() {
        // @ts-ignore
        const { user: currentUser } = this.props;

        if (!currentUser) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.name}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <p>
                    <strong>Id:</strong> {currentUser.id}
                </p>
                <p>
                    <strong>Email:</strong> {currentUser.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                    {currentUser.roles &&
                    currentUser.roles.map((
                        role: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined,
                        index: React.Key | null | undefined
                    ) => <li key={index}>{role}</li>)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state: { auth: { user: any; }; }) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(ProfilePage);
