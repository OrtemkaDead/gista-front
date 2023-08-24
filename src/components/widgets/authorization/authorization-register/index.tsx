import { AuthorizationFormWrapper, Button, Typography } from '@/components/shared'
import { useMemo } from 'react'

import { FormStepper } from '../../form-stepper'
import { FirstScreen } from '../../register-form-screens/first-screen'
import { FourthScreen } from '../../register-form-screens/fourth-screen'
import { SecondScreen } from '../../register-form-screens/second-screen'
import { ThirdScreen } from '../../register-form-screens/third-screen'
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
    ),
    [],
  )

  return (
    <AuthorizationFormWrapper
      titleText="Создание аккаунта"
      buttonSide={buttons}
    >
      <div className={`${componentClassName}__content`}>
        <FormStepper
          activeStep={1}
          steps={[1, 2, 3, 4]}
        />
        <FourthScreen />
      </div>
    </AuthorizationFormWrapper>
  )
}
