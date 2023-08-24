'use client'

import { Button, Icon, TextInput, Typography } from '@/components/shared'
import { useState } from 'react'

import FourthScreenProps from './fourth-screen.types'
import './styles.scss'

export const FourthScreen: React.FC<FourthScreenProps> = ({}) => {
  const [password, setPassword] = useState<string>('')
  const [confPassword, setConfPassword] = useState<string>('')

  const componentClassName = 'fourth-screen'

  return (
    <form className={componentClassName}>
      <div className={`${componentClassName}__inputs`}>
        <TextInput
          value={password}
          setValue={setPassword}
          placeholder="Пароль"
          type="password"
        />
        <div className={`${componentClassName}__validation-container`}>
          <div className={`${componentClassName}__validation-conditions`}>
            <div className={`${componentClassName}__validation-condition`}>
              <Icon
                height={8}
                width={8}
                iconName="circle"
              />
              <Typography
                className={`${componentClassName}__validation-condition`}
                variant="text-14"
                font="lato"
              >
                Не менее 8 символов
              </Typography>
            </div>
            <div className={`${componentClassName}__validation-condition`}>
              <Icon
                height={8}
                width={8}
                iconName="circle"
              />
              <Typography
                variant="text-14"
                font="lato"
              >
                Заглавная буква
              </Typography>
            </div>
          </div>
          <div className={`${componentClassName}__validation-conditions`}>
            <div className={`${componentClassName}__validation-condition`}>
              <Icon
                height={8}
                width={8}
                iconName="circle"
              />
              <Typography
                variant="text-14"
                font="lato"
              >
                Не менее 1 цифры
              </Typography>
            </div>
            <div className={`${componentClassName}__validation-condition`}>
              <Icon
                height={8}
                width={8}
                iconName="circle"
              />
              <Typography
                font="lato"
                variant="text-14"
              >
                Специальный символ
              </Typography>
            </div>
          </div>
        </div>
        <TextInput
          value={confPassword}
          setValue={setConfPassword}
          placeholder="Подтверждение пароля"
          type="password"
        />
      </div>
      <Button
        size="large"
        fullWidth
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}
