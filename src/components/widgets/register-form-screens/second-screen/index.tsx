'use client'

import { Button, TextInput } from '@/components/shared'
import { useState } from 'react'

import SecondScreenProps from './second-screen.types'
import './styles.scss'

export const SecondScreen: React.FC<SecondScreenProps> = ({ setActiveScreen }) => {
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const componentClassName = 'second-screen'

  const handleClick = () => {
    setActiveScreen(3)
  }

  return (
    <form className={componentClassName}>
      <div className={`${componentClassName}__inputs`}>
        <TextInput
          value={phone}
          setValue={setPhone}
          type="tel"
          placeholder="Номер телефона"
        />
        <TextInput
          value={email}
          setValue={setEmail}
          type="text"
          placeholder="E-mail"
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