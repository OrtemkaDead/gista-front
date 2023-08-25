'use client'

import { FC, memo, useMemo, useState } from 'react'

import { Button, UniversityForm } from '@/shared'

import './styles.scss'
import { UniversityFormContainerProps } from './university-form-container'

export const UniversityFormContainer: FC<UniversityFormContainerProps> = ({
  formType,
  universityIsConnected = false,
}) => {
  const [value, setValue] = useState('')

  // логика взаимодействия с формой
  const content = useMemo(() => {
    return (
      <>
        {universityIsConnected ? (
          <Button
            size="large"
            type="secondary"
            className="account-card__button--unsubscribe"
          >
            Отменить подключение
          </Button>
        ) : (
          <UniversityForm
            formType={formType}
            value={value}
            setValue={setValue}
          />
        )}
      </>
    )
  }, [formType, universityIsConnected, value])

  return <>{content}</>
}

export default memo(UniversityFormContainer)
