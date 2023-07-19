import axios, { type AxiosInstance } from 'axios'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'

export const $api: AxiosInstance = axios.create({
  baseURL: __API__,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || ''

  return config
})
