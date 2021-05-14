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

    handleSubmit(values: { name: string, email: string; password: string, password_confirmation: string }): boolean {
        this.setState({
            loading: true,
            successful: false,
        });

        this.props.dispatch(register(values.name, values.email, values.password, values.password_confirmation))
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
        const { isLoggedIn, message, validationErrors } = this.props;
        if (isLoggedIn) {
            return <Redirect to='/profile' />;
        }

        return (
            <div className="auth">
                <Formik
                    initialValues={{ name: '', email: '', password: '', password_confirmation: '' }}
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
                                name="name"
                                className={'form-control mt-1 ' + (errors.name && touched.name ? 'alert alert-danger' : '')}
                                placeholder="Username"
                                validate={validateUsername}
                            />
                            <ErrorMessage className="text-danger" name="name" component="div" />
                            <div dangerouslySetInnerHTML={{__html: validationErrors && validationErrors.name
                                    ? validationErrors.name.map((x: string) => "<span class='text-danger'>"+x+"</span>")
                                    : ''}} />

                            <Field
                                type="email"
                                name="email"
                                className={'form-control mt-1 ' + (errors.email && touched.email ? 'alert alert-danger' : '')}
                                placeholder="Email"
                                validate={validateEmail}
                            />
                            <ErrorMessage className="text-danger" name="email" component="div" />
                            <div dangerouslySetInnerHTML={{__html: validationErrors && validationErrors.email
                                    ? validationErrors.email.map((x: string) => "<span class='text-danger'>"+x+"</span>")
                                    : ''}} />

                            <Field
                                type="password"
                                name="password"
                                className={'form-control mt-1 ' + (errors.password && touched.password ? 'alert alert-danger' : '')}
                                placeholder="Password"
                                validate={validatePassword}
                            />
                            <ErrorMessage className="text-danger" name="password" component="div" />
                            <div dangerouslySetInnerHTML={{__html: validationErrors && validationErrors.password
                                    ? validationErrors.password.map((x: string) => "<span class='text-danger'>"+x+"</span>")
                                    : ''}} />

                            <Field
                                type="password"
                                name="password_confirmation"
                                className={'form-control mt-1 ' + (errors.password_confirmation && touched.password_confirmation ? 'alert alert-danger' : '')}
                                placeholder="Confirm password"
                                validate={(value: string) => confirmPassword(values.password, value)}
                            />
                            <ErrorMessage className="text-danger" name="password_confirmation" component="div" />
                            <div dangerouslySetInnerHTML={{__html: validationErrors && validationErrors.password_confirmation
                                    ? validationErrors.password_confirmation.map((x: string) => "<span class='text-danger'>"+x+"</span>")
                                    : ''}} />

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

function mapStateToProps(state: { auth: { isLoggedIn: any; }; message: { message: any; }; validationErrors: { validationErrors: any; }; }) {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    const { validationErrors } = state.validationErrors;
    return {
        isLoggedIn,
        message,
        validationErrors,
    };
}

export default connect(mapStateToProps)(RegisterPage);
