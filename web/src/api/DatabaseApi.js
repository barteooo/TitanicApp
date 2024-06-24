import axios from "axios";
import config from "../config";

class DatabaseApi {
    static async getAllCrewMembers() {
        try {
            const response = await axios.get(`${config.DB_ADRESS}/crew`);
            return {
                success: true,
                crewMembers: response.data
            };
        } catch (error) {
            console.error('Error during fetching crew members:', error);
            return {
                success: false,
                message: error.response ? error.response.data : 'Server did not respond'
            };
        }
    }
}

export default DatabaseApi;