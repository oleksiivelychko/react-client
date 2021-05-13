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
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(username: string, email: string, password: string) {
        return axios
            .post(`${authEndpoint()}/register/`, {username, email, password})
            .then((response: AxiosResponse) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    return response.data;
                }
            });
    }
}

export default new AuthService();
