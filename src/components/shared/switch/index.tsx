import classnames from 'classnames'
import { memo } from 'react'

import './styles.scss'
import SwitchProps from './switch.types'

const Button: React.FC<SwitchProps> = ({ className = '', isOn, onChange }) => {
  //* ClassNames
  const componentClassName = 'switch'
  const SwitchClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <>
      <input
        checked={isOn}
        onChange={onChange}
        className={`${SwitchClassName}__checkbox`}
        id="switch"
        type="checkbox"
      />
      <label
        htmlFor="switch"
        className={isOn ? `${SwitchClassName}__label active` : `${SwitchClassName}__label`}
      >
        <span className={`${SwitchClassName}__button`} />
      </label>
    </>
  )
}

export default memo(Button)
