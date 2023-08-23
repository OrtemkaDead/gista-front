import { memo, useMemo } from 'react'

import { AuthorizationFormWrapper, Button, EmailInput, PasswordInput, Typography } from '@/shared'

import AuthorizationLoginProps from './authorization-login.types'
import './styles.scss'

export const AuthorizationLogin: React.FC<AuthorizationLoginProps> = ({}) => {
  //* ClassNames
  const componentClassName = 'authorization-login'

  const buttons = useMemo(
    () => (
      <>
        <Button
          size="large"
          fullWidth
          to="/"
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
    [],
  )

  return (
    <AuthorizationFormWrapper
      titleText="Вход"
      buttonSide={buttons}
    >
      <div className={`${componentClassName}__content`}>
        <EmailInput />
        <PasswordInput />
      </div>
    </AuthorizationFormWrapper>
  )
}

export default memo(AuthorizationLogin)
