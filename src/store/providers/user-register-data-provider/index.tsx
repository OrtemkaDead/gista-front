/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, PropsWithChildren, createContext, useMemo, useState } from 'react'

import { UserDataContextProps } from './user-data-context.types'

const initialContext = {
  email: '',
  phone: '',
  password: '',
  first_name: '',
  last_name: '',
  surname: '',
  setEmail: () => {},
  setPhone: () => {},
  setPassword: () => {},
  setFirstName: () => {},
  setLastName: () => {},
  setSurname: () => {},
}

export const UserDataContext = createContext<UserDataContextProps>(initialContext)

const UserDataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [surnameValue, setSurnameValue] = useState('')

  const userDataProps = useMemo(
    () => ({
      email: emailValue,
      phone: phoneValue,
      password: passwordValue,
      first_name: firstNameValue,
      last_name: lastNameValue,
      surname: surnameValue,
      setEmail: setEmailValue,
      setPhone: setPhoneValue,
      setPassword: setPasswordValue,
      setFirstName: setFirstNameValue,
      setLastName: setLastNameValue,
      setSurname: setSurnameValue,
    }),
    [emailValue, phoneValue, passwordValue, firstNameValue, lastNameValue, surnameValue],
  )

  return <UserDataContext.Provider value={userDataProps}>{children}</UserDataContext.Provider>
}

export default UserDataProvider
