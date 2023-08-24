import FormStepperProps from './form-stepper.types'
import './styles.scss'

export const FormStepper: React.FC<FormStepperProps> = ({ steps, activeStep }) => {
  //* ClassNames
  // const componentClassName = 'form-stepper'

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
            <div className="circle">{step}</div>
          </div>
          {step < steps.length && <div className="line"></div>}
        </div>
      ))}
    </div>
  )
}
