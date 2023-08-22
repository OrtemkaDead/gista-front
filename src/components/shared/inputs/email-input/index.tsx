'use client'

import classnames from 'classnames'
import { memo, useState } from 'react'

import { TextInput } from '@/shared'

import EmailInputProps from './email-input.types'
import './styles.scss'

const EmailInput: React.FC<EmailInputProps> = ({ className = '' }) => {
  const [emailValue, setEmailValue] = useState<string>('')

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
      value={emailValue}
      setValue={setEmailValue}
    />
  )
}

export default memo(EmailInput)
