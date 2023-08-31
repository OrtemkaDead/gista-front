import { AuthorizationFormWrapper, Button, Typography } from '@/components/shared'
import { useMemo } from 'react'

import { FormStepper } from '../../form-stepper'
import AuthorizationRegisterProps from './authorization-register.types'
import './styles.scss'

export const AuthorizationRegister: React.FC<AuthorizationRegisterProps> = ({}) => {
  const componentClassName = 'authorization-register'

  const buttons = useMemo(
    () => (
      <div className={`${componentClassName}__no-account`}>
        <Typography
          className={`${componentClassName}__no-account-text`}
          variant="title-h3"
          font="ntSomic"
        >
          Есть аккаунт?
        </Typography>
        <Button
          type="borderless"
          size="large"
          to="/authorization"
        >
          Войти
        </Button>
      </div>
    ),
    [],
  )

  return (
    <AuthorizationFormWrapper
      titleText="Создание аккаунта"
      buttonSide={buttons}
    >
      <div className={`${componentClassName}__content`}>
        <FormStepper />
      </div>
    </AuthorizationFormWrapper>
  )
}
