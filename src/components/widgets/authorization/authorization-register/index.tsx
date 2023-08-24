import { AuthorizationFormWrapper } from '@/components/shared'

import { FormStepper } from '../../form-stepper'
import { FourthScreen } from '../../register-form-screens/fourth-screen'
import AuthorizationRegisterProps from './authorization-register.types'
import './styles.scss'

export const AuthorizationRegister: React.FC<AuthorizationRegisterProps> = ({}) => {
  const componentClassName = 'authorization-register'

  return (
    <AuthorizationFormWrapper
      titleText="Создание аккаунта"
      buttonSide={null}
    >
      <div className={`${componentClassName}__content`}>
        <FormStepper
          activeStep={1}
          steps={[1, 2, 3]}
        />
        <FourthScreen />
      </div>
    </AuthorizationFormWrapper>
  )
}
