import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import UserService from "../../../services/auth/UserService";
import Header from "../../views/Header";
import {refresh, logout} from "../../../actions/auth/AuthActions";

class ProfilePage extends React.Component <any, any> {

    constructor(props: {}) {
        super(props);

        this.state = {
            user: {
                name: ''
            }
        };
    }

    componentDidMount() {

        const { dispatch } = this.props;

        dispatch(refresh())
            .then(() => {
                UserService.getUser().then(
                    response => {
                        this.setState({
                            user: response.data
                        });
                    },
                    error => {
                        dispatch(logout());
                    }
                );
            })
            .catch(() => {
                dispatch(logout());
            });
    }

    render() {
        const { user: currentUser } = this.props;

        if (!currentUser) {
            return <Redirect to="/login" />;
        }

        return (
            <div>
                <Header username={this.state.user.name}/>
                <main>
                    <p>
                        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                    </p>
                </main>
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
