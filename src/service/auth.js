// AuthService.js
import axios from 'axios';
import { server_url } from '../config/config';

class AuthService {
    constructor() {
        this.baseUrl = `${server_url}auth`; // Replace this with your API base URL
    }

    async register(data) {
        try {
            const response = await axios.post(`${this.baseUrl}/register`, data);
            console.log(response.data);
            return response.data?.success;
        } catch (error) {
            console.log(error);
            throw error.response?.data?.msg || 'Failed to register'
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
            throw error.response.data?.msg || 'Failed to login';
        }
    }

    async logout() {
        try {
            const response = await axios.post(`${this.baseUrl}/logout`, {}, { withCredentials: true });
            console.log(response);
            return response.data.success;
        } catch (error) {
            console.log(error);
            throw new Error (error.response.data?.msg || 'Failed to logout')
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
