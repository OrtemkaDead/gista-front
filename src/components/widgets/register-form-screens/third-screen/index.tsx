'use client'

import { Button, Typography } from '@/components/shared'
import { useState } from 'react'
import AuthCode from 'react-auth-code-input'

import './styles.scss'
import ThirdScreenProps from './third-screen.types'

export const ThirdScreen: React.FC<ThirdScreenProps> = ({ setActiveScreen }) => {
  const [code, setCode] = useState<string>('')

  const componentClassName = 'third-screen'

  const handleClick = () => {
    setActiveScreen(4)
  }

  return (
    <form className={componentClassName}>
      <div className={`${componentClassName}__title`}>
        <Typography
          variant="text-16"
          font="lato"
          tag="p"
        >
          На адрес sense.nessa@gmail.com выслан код подтверждения. Проверьте папку “Спам”
        </Typography>
      </div>
      <div className={`${componentClassName}__inputs`}>
        <AuthCode
          containerClassName="code-container"
          inputClassName="code"
          allowedCharacters="numeric"
          onChange={(res) => setCode(res)}
        />
      </div>
      <Button
        onClick={handleClick}
        size="large"
        fullWidth
      >
        Продолжить
      </Button>
    </form>
  )
}
