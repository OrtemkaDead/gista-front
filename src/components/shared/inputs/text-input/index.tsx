import classnames from 'classnames'
import { memo, useCallback } from 'react'

import { Typography } from '@/shared'

import './styles.scss'
import TextInputProps from './text-input.types'

export const TextInput: React.FC<TextInputProps> = memo(function TextInput({
  className = '',
  value,
  setValue,
  placeholder,
  label,
  hintText,
  type = 'text',
  register,
  name = '',
}) {
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
          font="lato400"
        >
          {label}
        </Typography>
      )}
      <input
        {...(register ? register(name) : {})}
        onChange={onChangeHandler}
        placeholder={placeholder}
        value={value}
        type={type}
      />
      {hintText && (
        <Typography
          className={`${componentClassName}__hint-text`}
          variant="text-14"
          font="lato400"
        >
          {hintText}
        </Typography>
      )}
    </div>
  )
})
