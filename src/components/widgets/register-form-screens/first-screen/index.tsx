'use client'

import { Button, TextInput } from '@/components/shared'
import { useState } from 'react'

import FirstScreenProps from './first-screen.types'
import './styles.scss'

export const FirstScreen: React.FC<FirstScreenProps> = ({ setActiveScreen }) => {
  const [surname, setSurname] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const componentClassName = 'first-screen'

  const handleClick = () => {
    setActiveScreen(2)
  }

  return (
    <form className={componentClassName}>
      <div className={`${componentClassName}__inputs`}>
        <TextInput
          value={surname}
          setValue={setSurname}
          type="text"
          placeholder="Фамилия"
        />
        <TextInput
          setValue={setName}
          value={name}
          type="text"
          placeholder="Имя"
        />
        <TextInput
          setValue={setLastName}
          value={lastName}
          type="text"
          placeholder="Отчество"
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
