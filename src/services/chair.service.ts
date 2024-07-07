import axios from "axios";
import { IChair, IHall } from "../types";

class ChairService {
    private URL = 'http://localhost:8000/api/chairs';

    async getChairs() {
        const response = await axios.get<IChair[]>(this.URL);
        return response.data;
    }

    // async getHall(id: number) {
    //     const response = await axios.get<IChair>(this.URL+'/' + id);
    //     return response.data;
    // }

    async createChair(body: {"hall_id": number, "hall_row": number, "place": number}) {
        return await axios.post<IChair[]>(this.URL, body);
    }

    // async updateHall(body: {}, id: number) {
    //     const response = await axios.patch<IChair>(this.URL+'/' + id, body);
    //     return response.data;
    // }

    // async deleteHall(id: number) {
    //     return await axios.delete(this.URL+'/' + id);
    // }
}

export const chairService = new ChairService();