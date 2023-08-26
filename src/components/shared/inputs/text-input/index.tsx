import classnames from 'classnames'
import { memo, useCallback } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import { Typography } from '@/shared'

import './styles.scss'
import TextInputProps from './text-input.types'

const TextInput: React.FC<TextInputProps> = ({
  className = '',
  value,
  setValue,
  placeholder,
  label,
  hintText,
  type = 'text',
  register,
  name = '',
  options,
}) => {
  //* ClassNames
  const componentClassName = 'text-input'
  const TextInputClassName = classnames(
    componentClassName,

    className,
  )

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (setValue) {
        setValue(event.target.value)
      }
    },
    [setValue],
  )

  return (
    <div className={TextInputClassName}>
      {label && (
        <Typography
          className={`${componentClassName}__label`}
          variant="text-16"
          font="lato"
        >
          {label}
        </Typography>
      )}
      <input
        {...(register ? register(name, options) : {})}
        onChange={onChangeHandler}
        placeholder={placeholder}
        value={value}
        type={type}
      />
      {hintText && (
        <Typography
          className={`${componentClassName}__hint-text`}
          variant="text-14"
          font="lato"
        >
          {hintText.toString()}
        </Typography>
      )}
    </div>
  )
}

export default memo(TextInput)
