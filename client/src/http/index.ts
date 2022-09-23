import axios, { AxiosRequestConfig } from 'axios'

export const API_URL = `/api`

const api = axios.create({
  withCredentials: true, 
  baseURL: API_URL
})

api.interceptors.request.use((config: AxiosRequestConfig ) => {
  if(config.headers){
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  }
  return config;
})

api.interceptors.response.use( (config) => {
  return config
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get(`/api/refresh`, {withCredentials: true});
       localStorage.setItem('token', response.data.accesToken);
        return api.request(originalRequest)
    } catch (error) {
      console.log(error);
    }
  }
  throw error
})

export default api;