import axios from "axios"; 
import config from "../config";
class PredictionApi {
    static async predictSurvival(passengerData) {
        try {
            const response = await axios.post(`${config.ML_CLIENT_ADRESS}/predict/`, passengerData);
            return {
                success: true,
                ...response.data , 
    
            };
        } catch (error) {
            console.error('Error during prediction request:', error);
            return {
                success: false,
                message: error.response ? error.response.data : 'Server did not respond'
            };
        }
    }
}
export default PredictionApi;