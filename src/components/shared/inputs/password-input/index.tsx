'use client'

import classnames from 'classnames'
import { memo, useState } from 'react'

import { TextInput } from '@/shared'

import PasswordInputProps from './password-input.types'
import './styles.scss'

const PasswordInput: React.FC<PasswordInputProps> = ({ className = '' }) => {
  const [passwordValue, setPasswordValue] = useState<string>('')

  //* ClassNames
  const componentClassName = 'password-input'
  const PasswordInputClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <TextInput
      className={PasswordInputClassName}
      type="password"
      placeholder="Пароль"
      value={passwordValue}
      setValue={setPasswordValue}
    />
  )
}

export default memo(PasswordInput)
