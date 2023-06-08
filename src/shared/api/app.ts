import axios, { type AxiosInstance } from 'axios'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'

export const $api: AxiosInstance = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  },
})
