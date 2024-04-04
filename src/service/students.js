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
            throw error.response?.data?.msg;
        }
    }

    async getStudents(){
        try {
            const response = await axios.get(this.baseUrl)
            console.log(response);
            return response.data.students
        } catch (error) {
            console.error('Error fetch Students:', error);
            throw error.response?.data?.msg;
        }
    }

    async update(id, data) {
        try {
            const response = await axios.put(`${this.baseUrl}/${id}`, data);
            return response.data;
        } catch (error) {
            // Handle error
            console.error('Error updating student:', error);
            throw error.response?.data?.msg; // Re-throw the error to be caught by the caller
        }
    }
    
    async delete(id) { 
        try {
            const response = await axios.delete(`${this.baseUrl}/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error delete student:', error);
            throw error.response?.data?.msg;
        }
    }
}

const studentService = new StudentService()
export default studentService