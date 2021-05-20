import authHeader from '../../helpers/auth/AuthHeader';
import authEndpoint from '../../helpers/auth/AuthEndpoint';
import axios, {AxiosResponse} from 'axios';

class UserService {
    getUser() {
        return axios.get(`${authEndpoint()}/me/`, { headers: authHeader() });
    }
    refreshToken() {
        return axios.get(`${authEndpoint()}/refresh/`, { headers: authHeader() })
            .then((response: AxiosResponse) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                    return response.data;
                }
            })
            .catch(function (error) {
                if (error.response) {
                    return {
                        status: error.response.status,
                        data: error.response.data
                    };
                }
            });
    }
}

export default new UserService();
