import axios from 'axios'

const API_URL = 'http://localhost:3000/api/trips/v1'

export const getTrips = async (filters) => {
  try {
    const params = new URLSearchParams(filters);
    const response = await axios.get(`${API_URL}?${params.toString()}`)
    return response.data
  } catch (error) {
    console.error('Error fetching trips:', error)
    throw error
  }
}
