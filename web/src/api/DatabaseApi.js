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
    static async deleteCrewMember(passengerId) {
        try {
            const response = await axios.delete(`${config.DB_ADRESS}/crew/${passengerId}`);
            return {
                success: true,
                message: 'Crew member deleted successfully'
            };
        } catch (error) {
            console.error('Error during deleting crew member:', error);
            return {
                success: false,
                message: error.response ? error.response.data.detail : 'Server did not respond'
            };
        }
    }
}

export default DatabaseApi;