import Validate from '@/utils/Validate'
import classnames from 'classnames'
import { memo, useCallback } from 'react'

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
  disabled,
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
      if (type === 'tel') {
        const currentPhoneValue = event.target.value.replaceAll(/[ \-()]/g, '')
        event.target.value = Validate.phone(currentPhoneValue)
      }
    },
    [setValue, type],
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
        onChange={onChangeHandler}
        placeholder={placeholder}
        value={value}
        type={type}
        disabled={disabled}
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
