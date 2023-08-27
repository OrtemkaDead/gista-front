'use client'

import { FC, memo, useState } from 'react'

import { UserInfoForm } from '@/shared'

import { UserInfoFormContainerProps } from './user-info-form-container'

export const UserInfoFormContainer: FC<UserInfoFormContainerProps> = ({
  userPhone,
  userEmail,
  userPassword,
}) => {
  const [phoneValue, setPhoneValue] = useState(userPhone)
  const [emailValue, setEmailValue] = useState(userEmail)
  const [passwordValue, setPasswordValue] = useState(userPassword)

  // получение значение переменной из store (меняется по нажатию на кнопку редактировать/cохранить)
  const isEditAccount = false

  // логика взаимодействия с формой

  return (
    <UserInfoForm
      phoneValue={phoneValue}
      emailValue={emailValue}
      passwordValue={passwordValue}
      setPhoneValue={setPhoneValue}
      setEmailValue={setEmailValue}
      setPasswordValue={setPasswordValue}
      isEditAccount={isEditAccount}
    />
  )
}

export default memo(UserInfoFormContainer)
