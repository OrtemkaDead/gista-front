import { ISendCodeResponse, IUserData } from './user,service.interface'

const BASE_URL = 'https://xn----7sbkbx3cfeek7g.xn--p1ai/api'

export const USER_SERVICE = {
  async sendCode(email: string): Promise<ISendCodeResponse | null> {
    try {
      const response = await fetch(`${BASE_URL}/send_confirm_code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      return result
    } catch (error) {
      // можно прокинуть исключение - активирует error.ts(директория app)
      // либо возвращать null/error (и работать по нему при оишбки)
      console.log(error)

      return null
    }
  },
  async register(userData: IUserData): Promise<ISendCodeResponse | null> {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(userData),
      })

      const result = await response.json()

      return result
    } catch (error) {
      console.log(error)

      return null
    }
  },
}
