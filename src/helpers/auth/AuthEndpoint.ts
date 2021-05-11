export default function authEndpoint() {
    const API_AUTH_URL = process.env.REACT_APP_SERVER_URL;

    if (API_AUTH_URL) {
        return `${API_AUTH_URL}/api/auth`;
    } else {
        throw URIError('Did not managed to get SERVER_URL from .env');
    }
}
