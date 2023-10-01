import client from '@/shared/api/client'

export interface AuthApiService {
  // Авторизация
  signIn: (username: string, password: string) => Promise<void>
  // Регистрация
  signUp: () => Promise<void>
}

export default {
  async signIn(username: string, password: string) {
    return client({
      method: 'post',
      url: '/auth',

      data: {
        username,
        password,
      },
    })
  },
} as AuthApiService
