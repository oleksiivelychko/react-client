import AuthService from "../../services/auth/AuthService";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    SET_VALIDATION_ERRORS
} from '../Types';

export const login = (email: string, password: string) => (dispatch: (arg0: { type: string; payload?: any; }) => void) =>
{
    return AuthService.login(email, password).then(
        (data: any) => {

            // @ts-ignore
            if (typeof data.status !== 'undefined') {

                switch (data.status) {
                    case 401:
                        dispatch({
                            type: LOGIN_FAIL,
                        });
                        dispatch({
                            type: SET_MESSAGE,
                            payload: data.data && data.data.error ? data.data.error : data.data.toString()
                        });
                        break;
                    case 422:
                        dispatch({
                            type: LOGIN_FAIL,
                        });
                        dispatch({
                            type: SET_VALIDATION_ERRORS,
                            payload: data.data,
                        });
                        break;
                }

                return Promise.reject();
            }

            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error: { response: { data: { message: any; }; }; message: any; toString: () => any; }) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const register = (name: string, email: string, password: string, password_confirmation: string) => (dispatch: (arg0: { type: string; payload?: any; }) => void) =>
{
    return AuthService.register(name, email, password, password_confirmation).then(
        (response: { data: { message: any; }; }) => {

            // @ts-ignore
            if (typeof response.status !== 'undefined') {
                dispatch({
                    type: REGISTER_FAIL,
                });

                // @ts-ignore
                switch(response.status) {
                    case 400:
                        dispatch({
                            type: SET_VALIDATION_ERRORS,
                            payload: response.data,
                        });
                        break
                    default:
                        dispatch({
                            type: SET_MESSAGE,
                            payload: response.data,
                        });
                }

                return Promise.reject();
            }

            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.toString(),
            });

            return Promise.resolve();
        },
        (error: { response: { data: { message: any; }; }; message: any; toString: () => any; }) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch: (arg0: { type: string; }) => void) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};
