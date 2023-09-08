'use client'

import classnames from 'classnames'
import { memo, useState } from 'react'

import { TextInput } from '@/shared'

import EmailInputProps from './email-input.types'
import './styles.scss'

const EmailInput: React.FC<EmailInputProps> = ({ className = '', value, onChange }) => {
  //* ClassNames
  const componentClassName = 'email-input'
  const EmailInputClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <TextInput
      className={EmailInputClassName}
      type="email"
      placeholder="E-mail"
      value={value}
      setValue={onChange || (() => null)}
    />
  )
}

export default memo(EmailInput)
