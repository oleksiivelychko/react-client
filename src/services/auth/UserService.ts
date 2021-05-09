import authHeader from '../../helpers/auth/AuthHeader';
import authEndpoint from '../../helpers/auth/AuthEndpoint';
import axios from 'axios';

class UserService {
    getUser() {
        return axios.get(`${authEndpoint}/me/`, { headers: authHeader() });
    }
    refreshToken() {
        return axios.get(`${authEndpoint}/refresh/`, { headers: authHeader() });
    }
}

export default new UserService();
