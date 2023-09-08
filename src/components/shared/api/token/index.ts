import { AxiosResponse } from 'axios'

import client from '@/shared/api/client'

export type Token = string

interface CreateTokenResponse {
  refresh: Token
  access: Token
}

interface RefreshTokenResponse {
  refresh: Token
}

interface VerifyTokenResponse {
  data: boolean
}

export interface TokenApiService {
  // Creating
  create: (username: string, password: string) => Promise<AxiosResponse<CreateTokenResponse>>
  // Updating
  refresh: (token: string) => Promise<AxiosResponse<RefreshTokenResponse>>
  // Checking
  verify: (token: string) => Promise<AxiosResponse<boolean>>
}

export default {
  async create(username: string, password: string) {
    return client({
      method: 'post',
      url: '/token',

      data: {
        username,
        password,
      },
    })
  },
  async refresh(token: string) {
    return client({
      method: 'post',
      url: '/token/refresh',

      data: {
        token,
      },
    })
  },
  async verify(token: string) {
    return client({
      method: 'post',
      url: '/token/verify',

      data: {
        token,
      },
    })
  },
} as TokenApiService
