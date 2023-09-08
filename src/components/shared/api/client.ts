import axios, { AxiosError } from 'axios'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { APP_API_URL } from '@/shared/config'

//TODO: разьединить клиенты на api-client and auth-client

//! На клиентских компонентах скорее всего не будет работать из-за cookie()

const client = axios.create({
  baseURL: APP_API_URL,
})

client.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${cookies().get('token')}`
  return config
})
client.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config
    if (error.response?.status == 401 && error.config) {
      try {
        const response = await axios.post(`${APP_API_URL}/token/refresh`, {
          refresh: cookies().get('refresh-token'),
        })
        cookies().set('access-token', response.data.access)

        if (originalRequest) {
          return client.request(originalRequest)
        }
        // return Promise.reject(error)
      } catch (e) {
        console.log('ПОЛЬЗОВАТЕЛЬ НЕ АВТОРИЗОВАН!', e)
        redirect('/authorization')
      }
    }
    throw error
  },
)

export default client
