import { server_url } from "../config/config";
import axios from 'axios';
class ContactService{
    constructor(){
        this.baseUrl = `${server_url}contact`;
    }

    async save(contactData) {
        try {
            const response = await axios.post(`${this.baseUrl}`, contactData);
            console.log(response.data);
            return response.data; // Assuming your server responds with the saved contact data
        } catch (error) {
            console.error('Error while saving contact:', error);
            throw error; // Rethrow the error to be handled by the caller
        }
    }
}

const contactService = new ContactService()

export default contactService ; 