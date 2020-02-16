import axios from "axios"
import { toast } from "react-toastify"

// eslint-disable-next-line import/prefer-default-export
export const randomDog = axios.create({ baseURL: "https://random.dog" })

randomDog.interceptors.response.use(
  response => response.data,
  error => {
    // if (error.response.status === 401) {
    //   window.location.replace("/login")
    // }
    toast.error(error.toString())
    return Promise.reject(error)
  }
)

// randomDog.defaults.headers.common.Authorization = AUTH_TOKEN
