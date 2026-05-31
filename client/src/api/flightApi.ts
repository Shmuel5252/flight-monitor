import axios from 'axios';

const API_URL = 'http://localhost:3000/api/flights';

export interface FlightData {
    altitude: number;
    his: number;
    adi: number;
}

export const saveFlightData = async (data: FlightData): Promise<void> => {
    await axios.post(API_URL, data);
};