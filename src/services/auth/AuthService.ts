import axios, {AxiosResponse} from "axios";
import authEndpoint from "../../helpers/auth/AuthEndpoint";

class AuthService {

    login(email: string, password: string) {
        return axios
            .post(`${authEndpoint()}/login/`, {email, password})
            .then((response: AxiosResponse) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    return response.data;
                }
            })
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    //console.log(error.response.data);
                    //console.log(error.response.status);
                    //console.log(error.response.headers);
                    return error.response;
                } else if (error.request) {
                    // The request was made but no response was received
                    //console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    //console.log('Error', error.message);
                }
                throw Error(error.toString())
            });
    }

    register(name: string, email: string, password: string, password_confirmation: string) {
        return axios
            .post(`${authEndpoint()}/register/`, {name, email, password, password_confirmation})
            .then((response: AxiosResponse) => {
                return response.data.message;
            })
            .catch(function (error) {
                if (error.response) {
                    return error.response;
                }
                throw Error(error.toString())
            });
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService();
