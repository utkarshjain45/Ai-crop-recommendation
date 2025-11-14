import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1'

export const fieldService = {
  async createField(data: any) {
    const response = await axios.post(`${API_BASE_URL}/fields`, data)
    return response.data
  },
  async getField(id: string) {
    const response = await axios.get(`${API_BASE_URL}/fields/${id}`)
    return response.data
  },
}

