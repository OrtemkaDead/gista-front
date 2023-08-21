'use client'

import classnames from 'classnames'
import { memo, useEffect, useState } from 'react'

import { TextInput } from '@/shared'

import EmailInputProps from './email-input.types'
import './styles.scss'

const EmailInput: React.FC<EmailInputProps> = ({ className = '', setIsValid }) => {
  const [emailValue, setEmailValue] = useState<string>('')

  useEffect(() => {
    const isValidEmail = emailValue.length > 0 ? true : false

    if (setIsValid) setIsValid(isValidEmail)
  }, [emailValue, setIsValid])

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
