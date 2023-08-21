'use client'

import { memo, useMemo, useState } from 'react'

import { AuthorizationFormWrapper, Button, EmailInput, PasswordInput, Typography } from '@/shared'

import AuthorizationLoginProps from './authorization-login.types'
import './styles.scss'

export const AuthorizationLogin: React.FC<AuthorizationLoginProps> = ({
  className = '',
  children = 'some...',
}) => {
  const [emailIsValid, setEmailIsValid] = useState<boolean>(false)

  //* ClassNames
  const componentClassName = 'authorization-login'

  const authorizationButtonIsDisabled = !emailIsValid

  const buttons = useMemo(
    () => (
      <>
        <Button
          size="large"
          fullWidth
          disabled={authorizationButtonIsDisabled}
          to="/"
        >
          Войти
        </Button>
        <div className={`${componentClassName}__no-account`}>
          <Typography
            className={`${componentClassName}__no-account-text`}
            variant="title-h3"
            font="ntSomic400"
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
    [authorizationButtonIsDisabled],
  )

  return (
    <AuthorizationFormWrapper
      titleText="Вход"
      buttonSide={buttons}
    >
      <div className={`${componentClassName}__content`}>
        <EmailInput setIsValid={setEmailIsValid} />
        <PasswordInput />
      </div>
    </AuthorizationFormWrapper>
  )
}

export default memo(AuthorizationLogin)
