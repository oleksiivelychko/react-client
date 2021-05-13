import React from "react";
import {Link, Redirect} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validatePassword, validateEmail, validateUsername, confirmPassword } from "../../../validators/BaseSchema";
import { connect } from "react-redux";
import { register } from "../../../actions/auth/AuthActions";
import "../../../styles/auth.scss";

class RegisterPage extends React.Component<any, any> {

    constructor(props: {}) {
        super(props);
        this.state = {
          loading: false,
          successful: false,
        };
    }

    handleSubmit(values: { username: string, email: string; password: string }): boolean {
        this.setState({
            loading: true,
            successful: false,
        });

        this.props.dispatch(register(values.username, values.email, values.password))
            .then(() => {
                this.setState({
                    loading: false,
                    successful: true,
                });
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    successful: false,
                });
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
                    initialValues={{ username: '', email: '', password: '', password_confirm: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(this.handleSubmit(values));
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          isSubmitting
                    }) => (
                        <Form className="auth__form auth__form-signup">
                            <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                            <Field
                                type="text"
                                name="username"
                                className={'form-control mt-1 ' + (errors.username && touched.username ? 'alert alert-danger' : '')}
                                placeholder="Username"
                                validate={validateUsername}
                            />
                            <Field
                                type="email"
                                name="email"
                                className={'form-control mt-1 ' + (errors.email && touched.email ? 'alert alert-danger' : '')}
                                placeholder="Email"
                                validate={validateEmail}
                            />
                            <ErrorMessage className="text-danger" name="email" component="div" />
                            <Field
                                type="password"
                                name="password"
                                className={'form-control mt-1 ' + (errors.password && touched.password ? 'alert alert-danger' : '')}
                                placeholder="Password"
                                validate={validatePassword}
                            />
                            <ErrorMessage className="text-danger" name="password" component="div" />
                            <Field
                                type="password"
                                name="password_confirm"
                                className={'form-control mt-1 ' + (errors.password_confirm && touched.password_confirm ? 'alert alert-danger' : '')}
                                placeholder="Confirm password"
                                validate={(value: string) => confirmPassword(values.password, value)}
                            />
                            <ErrorMessage className="text-danger" name="password_confirm" component="div" />
                            <button type="submit" disabled={isSubmitting} className="btn btn-lg btn-primary btn-block mt-3">
                                {this.state.loading && (<span className="spinner-border spinner-border-sm" />)}
                                Register
                            </button>

                            {message && (<div className={'mt-4 alert ' + (this.state.successful ? 'alert-success' : 'alert-danger') } role="alert">{message}</div>)}
                            <p className="mt-4 text-muted"><Link to='/'>Go Home</Link></p>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

function mapStateToProps(state: { message: { message: any; }; }) {
    const { message } = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(RegisterPage);
