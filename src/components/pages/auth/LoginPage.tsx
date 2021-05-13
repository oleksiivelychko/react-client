import React from "react";
import {Link, Redirect} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validatePassword, validateEmail } from "../../../validators/BaseSchema";
import { connect } from "react-redux";
import { login } from "../../../actions/auth/AuthActions";
import "../../../styles/auth.scss";

class LoginPage extends React.Component<any, any> {

    constructor(props: {}) {
        super(props);
        this.state = {loading: false};
    }

    handleSubmit(values: { email: string; password: string; }): boolean {
    this.setState({loading: true});

    const { dispatch, history } = this.props;

    dispatch(login(values.email, values.password))
        .then(() => {
            history.push('/profile');
            return true;
        })
        .catch(() => {
            this.setState({loading: false});
        });

        return false;
    }

    render() {
        const { isLoggedIn, message } = this.props;
        if (isLoggedIn) {
            return <Redirect to='/profile' />;
        }

        return (
            <div className="auth">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(this.handleSubmit(values));
                    }}
                >
                {({ errors, isSubmitting}) => (
                    <Form className="auth__form auth__form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                        <Field
                            type="email"
                            name="email"
                            className={'form-control mt-1 ' + (errors.email ? 'alert alert-danger' : '')}
                            placeholder="Email"
                            validate={validateEmail}
                        />
                        <ErrorMessage className="text-danger" name="email" component="div" />
                        <Field
                            type="password"
                            name="password"
                            className={'form-control mt-1 ' + (errors.password ? 'alert alert-danger' : '')}
                            placeholder="Password"
                            validate={validatePassword}
                        />
                        <ErrorMessage className="text-danger" name="password" component="div" />
                        <button type="submit" disabled={isSubmitting} className="btn btn-lg btn-primary btn-block mt-3">
                            {this.state.loading && (<span className="spinner-border spinner-border-sm" />)}
                          Log in
                        </button>

                        {message && (<div className="alert alert-danger mt-4" role="alert">{message}</div>)}

                        <p className="mt-4 text-muted"><Link to='/'>Go Home</Link></p>
                    </Form>
                )}
                </Formik>
            </div>
        );
    }
}

function mapStateToProps(state: { auth: { isLoggedIn: any; }; message: { message: any; }; }) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
        isLoggedIn,
        message
    };
}

export default connect(mapStateToProps)(LoginPage);

