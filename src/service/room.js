import { server_url } from "../config/config";
import axios from "axios"
class RoomService{
    constructor(){
        this.baseUrl = `${server_url}rooms`;
    }

    async save(roomData){
        try {
            const response = await axios.post(this.baseUrl, roomData, {
                withCredentials:true
            });
            // Handle successful response
            console.log('Room saved successfully:', response.data);
            return response.data; // Return any relevant data
        } catch (error) {
            // Handle error
            console.error('Error saving room:', error);
            throw error.response?.data?.msg;
        }
    }
}

const roomService = new RoomService();

export default roomService;