import authHeader from '../../params/auth/AuthHeader';
import authEndpoint from '../../params/auth/AuthEndpoint';
import axios from "axios";

class UserService {
    getUser() {
        return axios.get(`${authEndpoint}/me/`, { headers: authHeader() });
    }
    refreshToken() {
        return axios.get(`${authEndpoint}/refresh/`, { headers: authHeader() });
    }
}

export default new UserService();
