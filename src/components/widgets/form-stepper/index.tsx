import Typography from '@/components/shared/typography'

import FormStepperProps from './form-stepper.types'
import './styles.scss'

export const FormStepper: React.FC<FormStepperProps> = ({ steps, activeStep }) => {
  // Переписать на classnames
  const getStepClass = (step: number) => {
    let cls = 'step'
    if (activeStep === step) {
      cls += ' step-active'
    } else if (activeStep > step) {
      cls += ' step-done'
    } else {
      cls += ' step-inactive'
    }
    return cls
  }

  return (
    <div className="steps-container">
      {steps.map((step, index) => (
        <div
          className={getStepClass(step)}
          key={index}
        >
          <div>
            <div className="circle">
              <Typography
                variant="title-h3"
                font="ntSomic"
                tag="span"
              >
                {step}
              </Typography>
            </div>
          </div>
          {step < steps.length && <div className="line"></div>}
        </div>
      ))}
    </div>
  )
}
