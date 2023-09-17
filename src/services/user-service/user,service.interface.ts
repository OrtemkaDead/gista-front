export interface ISendCodeResponse {
  success: boolean
  code?: number
  message: string
}

export interface IUserData {
  email: string
  phone: string
  password: string
  first_name: string
  last_name: string
  surname: string
}
