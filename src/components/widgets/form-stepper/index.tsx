'use client'

import Typography from '@/components/shared/typography'
import UserDataProvider from '@/store/providers/user-register-data-provider'
import { useMemo, useState } from 'react'

import { FirstScreen } from '../register-form-screens/first-screen'
import { FourthScreen } from '../register-form-screens/fourth-screen'
import { SecondScreen } from '../register-form-screens/second-screen'
import { ThirdScreen } from '../register-form-screens/third-screen'
import FormStepperProps from './form-stepper.types'
import './styles.scss'

const FIO_FORM_SCREEN = 1
const PHONE_EMAIL_SCREEN = 2
const CODE_SCREEN = 3
const PASSWORD_SCREEN = 4

const screens = [FIO_FORM_SCREEN, PHONE_EMAIL_SCREEN, CODE_SCREEN, PASSWORD_SCREEN]

export const FormStepper: React.FC<FormStepperProps> = ({}) => {
  const [activeScreen, setActiveScreen] = useState<number>(FIO_FORM_SCREEN)

  const content = useMemo(() => {
    if (activeScreen === FIO_FORM_SCREEN) {
      return <FirstScreen setActiveScreen={setActiveScreen} />
    }
    if (activeScreen === PHONE_EMAIL_SCREEN) {
      return <SecondScreen setActiveScreen={setActiveScreen} />
    }
    if (activeScreen === CODE_SCREEN) {
      return <ThirdScreen setActiveScreen={setActiveScreen} />
    }
    if (activeScreen === PASSWORD_SCREEN) {
      return <FourthScreen setActiveScreen={setActiveScreen} />
    }
  }, [activeScreen])

  // Переписать на classnames
  const getStepClass = (screen: number) => {
    let cls = 'step'
    if (activeScreen === screen) {
      cls += ' step-active'
    } else if (activeScreen > screen) {
      cls += ' step-done'
    } else {
      cls += ' step-inactive'
    }
    return cls
  }

  return (
    <UserDataProvider>
      <div className="steps-content">
        <div className="steps-container">
          {screens.map((screen, index) => (
            <div
              className={getStepClass(screen)}
              key={index}
            >
              <div>
                <div className="circle">
                  <Typography
                    variant="title-h3"
                    font="ntSomic"
                    tag="span"
                  >
                    {screen}
                  </Typography>
                </div>
              </div>
              {screen < screens.length && <div className="line"></div>}
            </div>
          ))}
        </div>
        {content}
      </div>
    </UserDataProvider>
  )
}
