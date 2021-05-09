// In order to gain the TypeScript typings (for intellisense / autocomplete)
const axios = require('axios').default;

const API_AUTH_URL = process.env.SERVER_URL + '/api/auth';

class AuthService {
    login(username: string, password: string) {
        return axios
            .post(API_AUTH_URL + '/login/', {username, password})
            .then((response: any) => {
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
            .post(API_AUTH_URL + '/register/', {username, email, password})
            .then((response: any) => {
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
