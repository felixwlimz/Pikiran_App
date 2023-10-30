import axios from "axios";

export default class DoctorController {

    async getAllDoctors(){
        try {
            const response = await axios.get("https://reqres.in/api/users?page=2")
            return response.data.data;
        } catch (error) {
            throw new Error(error)
        }
    }
}