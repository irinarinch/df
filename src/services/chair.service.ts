import axios from "axios";
import { IChair, IHall } from "../types";

class ChairService {
  private URL = "http://localhost:8000/api/chairs";

  async getChairs() {
    const response = await axios.get<IChair[]>(this.URL);
    return response.data;
  }

  // Обновление кресла по ID
  async updateChair(id: number, body: Partial<IChair>) {
    const response = await axios.patch<IChair>(`${this.URL}/${id}`, body);
    return response.data;
  }

  // Создание нового кресла
  async createChair(body: { hall_id: number; hall_row: number; place: number }) {
    return await axios.post<IChair[]>(this.URL, body);
  }

  // Удаление кресла по ID
  async deleteChair(id: number) {
    return await axios.delete(`${this.URL}/${id}`);
  }
}

export const chairService = new ChairService();
