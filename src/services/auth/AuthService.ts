import authEndpoint from '../../helpers/auth/AuthEndpoint';
import axios, {AxiosResponse} from "axios";

class AuthService {
    login(username: string, password: string) {
        return axios
            .post(`${authEndpoint}/login/`, {username, password})
            .then((response: AxiosResponse) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            })
            .catch((error: any) => {
                console.log(error);
            })
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username: string, email: string, password: string) {
        return axios
            .post(`${authEndpoint}/register/`, {username, email, password})
            .then((response: AxiosResponse) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    return response.data;
                }
            })
            .catch((error: any) => {
                console.log(error);
            })
    }
}

export default new AuthService();
