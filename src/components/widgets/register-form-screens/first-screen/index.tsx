'use client'

import { Button, TextInput } from '@/components/shared'
import { useState } from 'react'

import FirstScreenProps from './first-screen.types'
import './styles.scss'

export const FirstScreen: React.FC<FirstScreenProps> = ({}) => {
  const [surname, setSurname] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  const componentClassName = 'first-screen'

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
        size="large"
        fullWidth
      >
        Продолжить
      </Button>
    </form>
  )
}
