import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1'

export const recommendationService = {
  async getRecommendations(fieldId: string, preferences?: any) {
    const response = await axios.post(`${API_BASE_URL}/recommend`, {
      fieldId,
      preferences: preferences || {},
    })
    return response.data
  },
}

