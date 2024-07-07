import axios from "axios";
import { IHall } from "../types";

class HallService {
    private URL = 'http://localhost:8000/api/halls';

    async getHalls() {
        const response = await axios.get<IHall[]>(this.URL);
        return response.data;
    }

    async getHall(id: number) {
        const response = await axios.get<IHall>(this.URL+'/' + id);
        return response.data;
    }

    async createHall(body: {}) {        
        return await axios.post<IHall[]>(this.URL, body);
    }

    async updateHall(body: {}, id: number) {
        const response = await axios.patch<IHall>(this.URL+'/' + id, body);
        return response.data;
    }

    async deleteHall(id: number) {
        return await axios.delete(this.URL+'/' + id);
    }
}

export const hallService = new HallService();