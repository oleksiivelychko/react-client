import AuthService from "../../services/auth/AuthService";
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from '../../types/auth/AuthTypes';

export const register = (username: string, email: string, password: string) => (dispatch: (arg0: { type: string; payload?: any; }) => void) =>
{
    return AuthService.register(username, email, password).then(
        (response: { data: { message: any; }; }) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message,
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

export const login = (email: string, password: string) => (dispatch: (arg0: { type: string; payload?: any; }) => void) =>
{
    return AuthService.login(email, password).then(
        (data: any) => {
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

export const logout = () => (dispatch: (arg0: { type: string; }) => void) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};
