'use client'

import { memo, useCallback, useMemo, useState } from 'react'

import { AuthorizationFormWrapper, Button, EmailInput, PasswordInput, Typography } from '@/shared'

import AuthorizationLoginProps from './authorization-login.types'
import './styles.scss'

export const AuthorizationLogin: React.FC<AuthorizationLoginProps> = ({ authFunc }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //* ClassNames
  const componentClassName = 'authorization-login'

  const handleAuthSubmited = useCallback(() => {
    authFunc(email, password)
  }, [authFunc, email, password])

  const buttons = useMemo(
    () => (
      <>
        <Button
          size="large"
          fullWidth
          onClick={handleAuthSubmited}
        >
          Войти
        </Button>
        <div className={`${componentClassName}__no-account`}>
          <Typography
            className={`${componentClassName}__no-account-text`}
            variant="title-h3"
            font="ntSomic"
          >
            Нет аккаунта?
          </Typography>
          <Button
            type="borderless"
            size="large"
            to="/register"
          >
            Зарегистрироваться
          </Button>
        </div>
      </>
    ),
    [handleAuthSubmited],
  )

  return (
    <AuthorizationFormWrapper
      titleText="Вход"
      buttonSide={buttons}
    >
      <div className={`${componentClassName}__content`}>
        <EmailInput
          value={email}
          onChange={setEmail}
        />
        <PasswordInput
          value={password}
          onChange={setPassword}
        />
      </div>
    </AuthorizationFormWrapper>
  )
}

export default memo(AuthorizationLogin)
