// AuthService.js
import axios from 'axios';
import { server_url } from '../config/config';

class AuthService {
    constructor() {
        this.baseUrl = `${server_url}auth`; // Replace this with your API base URL
    }

    async register({ username, email, password }) {
        try {
            const response = await axios.post(`${this.baseUrl}/register`, {
                username,
                email,
                password
            });
            console.log(response.data);
            return response.data?.success;
        } catch (error) {
            return error.response.data?.error?.msg || 'Failed to register';
        }
    }

    async login({ email, password }) {
        try {
            const response = await axios.post(`${this.baseUrl}/login`, {
                email,
                password
            }, { withCredentials: true });
            console.log(response);
            return response.data.success;
        } catch (error) {
            throw error.response.data.error?.msg || 'Failed to login';
        }
    }

    async getUser() {
        try {
            const response = await axios.get(`${this.baseUrl}/getuser`,
                {
                    withCredentials: true,
                    timeout: 5000
                });
            console.log(response);
            if (response.data.success) return response.data.user;
            return false
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

const authService = new AuthService();
export default authService;
