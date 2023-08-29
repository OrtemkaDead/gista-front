'use client'

import { FC, memo, useState } from 'react'

import { UserInfoForm } from '@/shared'

import { UserInfoFormContainerProps } from './user-info-form-container'

export const UserInfoFormContainer: FC<UserInfoFormContainerProps> = ({
  userPhone,
  userEmail,
  userPassword,
}) => {
  // пропсы - это данные user полученные с сервера и мы передаем их в поля формы UserInfoForm
  const [phoneValue, setPhoneValue] = useState(userPhone)
  const [emailValue, setEmailValue] = useState(userEmail)
  const [passwordValue, setPasswordValue] = useState(userPassword)

  // получение значение переменной из store (меняется по нажатию на кнопку редактировать/cохранить)
  // определяет активацию/дезактивацию инпутов в форме редактиования пользователя
  const isEditUser = false

  // логика взаимодействия с формой
  // в TextInput нельзя передать событие onChange -
  // !!!оно необходимо для диспатча например данных в store по событию onChange!!!
  // так как форма UserInfoForm не имеет кнопки submit

  // cобытие на клик по кнопке 'Управление подпиской' в форме UserInfoForm
  const manageSubscription = () => {
    console.log('Управление подпиской')
  }

  return (
    <UserInfoForm
      phoneValue={phoneValue}
      emailValue={emailValue}
      passwordValue={passwordValue}
      setPhoneValue={setPhoneValue}
      setEmailValue={setEmailValue}
      setPasswordValue={setPasswordValue}
      isEditUserInfo={isEditUser}
      manageSubscription={manageSubscription}
    />
  )
}

export default memo(UserInfoFormContainer)
