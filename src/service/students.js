import { server_url } from "../config/config";
import axios from "axios";

class StudentService{
    constructor(){
        this.baseUrl = `${server_url}students`;
    }

    async save(studentData){
        try {
            const response = await axios.post(this.baseUrl, studentData, {
                withCredentials:true
            });
            // Handle successful response
            console.log('Room saved successfully:', response.data);
            return response.data; // Return any relevant data
        } catch (error) {
            // Handle error
            console.error('Error saving room:', error);
            return new Error('Failed to save room');
        }
    }

    async getStudents(){
        try {
            const response = await axios.get(this.baseUrl)
            console.log(response);
            return response.data.students
        } catch (error) {
            console.error('Error fetch Students:', error);
            throw new Error('Failed to get Students');
        }
    }
}

const studentService = new StudentService()
export default studentService