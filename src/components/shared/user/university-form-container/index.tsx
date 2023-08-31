'use client'

import { FC, MouseEventHandler, memo, useMemo, useState } from 'react'

import { Button, UniversityForm } from '@/shared'

import './styles.scss'
import { UniversityFormContainerProps } from './university-form-container'

export const UniversityFormContainer: FC<UniversityFormContainerProps> = ({
  formType,
  universityIsConnected = false,
}) => {
  const [value, setValue] = useState('')

  // логика взаимодействия с формой

  // cобытие на клик по кнопке 'Отменить подключение'
  const handleCancel: MouseEventHandler<HTMLButtonElement> = () => {
    console.log('Отменить подключение')
  }

  // события submit при клики по кнопкам в форме UniversityForm (передается ей как пропсы)
  const connectUniversity = () => {
    console.log('Подключиться к университету')
  }

  const sendRequest = () => {
    console.log('Подключиться к университету')
  }

  const content = useMemo(() => {
    return (
      <>
        {universityIsConnected ? (
          <Button
            size="large"
            type="secondary"
            className="account-card__button--unsubscribe"
            onClick={handleCancel}
          >
            Отменить подключение
          </Button>
        ) : (
          <UniversityForm
            formType={formType}
            value={value}
            setValue={setValue}
            sendRequest={sendRequest}
            connectUniversity={connectUniversity}
          />
        )}
      </>
    )
  }, [formType, universityIsConnected, value])

  return <>{content}</>
}

export default memo(UniversityFormContainer)
