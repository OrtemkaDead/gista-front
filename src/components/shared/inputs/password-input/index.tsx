'use client'

import classnames from 'classnames'
import { memo } from 'react'

import { TextInput } from '@/shared'

import PasswordInputProps from './password-input.types'
import './styles.scss'

const PasswordInput: React.FC<PasswordInputProps> = ({ className = '', value, onChange }) => {
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
      value={value}
      setValue={onChange || (() => null)}
    />
  )
}

export default memo(PasswordInput)
