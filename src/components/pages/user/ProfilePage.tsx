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
