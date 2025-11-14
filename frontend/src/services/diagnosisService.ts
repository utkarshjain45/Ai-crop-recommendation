import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1'

export const diagnosisService = {
  async diagnoseDisease(file: File) {
    const formData = new FormData()
    formData.append('image', file)
    const response = await axios.post(`${API_BASE_URL}/diagnose`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  },
}

