'use client'

import classnames from 'classnames'

import NumberInputProps from './number-input.types'
import './styles.scss'

//Todo: Миша, напиши дефолт значения для пропсов

export const NumberInput: React.FC<NumberInputProps> = ({
  className = '',
  value,
  onChange,
  required,
  disabled,
  min,
  max,
}) => {
  //* ClassNames
  const componentClassName = 'number-input'
  const NumberInputClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <input
      type="number"
      onChange={onChange}
      required={required}
      disabled={disabled}
      value={value}
      max={max}
      min={min}
      className={NumberInputClassName}
    />
  )
}
