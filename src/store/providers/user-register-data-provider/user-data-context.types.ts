export interface UserDataContextProps {
  email: string
  phone: string
  password: string
  first_name: string
  last_name: string
  surname: string
  setEmail: (value: string) => void
  setPhone: (value: string) => void
  setPassword: (value: string) => void
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
  setSurname: (value: string) => void
}
