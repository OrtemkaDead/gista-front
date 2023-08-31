import Validate from '@/utils/Validate'
import classnames from 'classnames'
import { useCallback } from 'react'
import { FieldValues } from 'react-hook-form'

import { Icon, Typography } from '../..'
import RegisterInputProps from './register-input.types'
import './styles.scss'

export const RegisterInput = <T extends FieldValues>({
  name,
  register,
  type,
  className,
  hintText,
  label,
  options,
  placeholder,
  value,
  setValue,
}: RegisterInputProps<T>) => {
  //* ClassNames
  const componentClassName = 'register-input'
  const RegisterInputClassName = classnames(
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
    <div className={RegisterInputClassName}>
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
        {...register(name, options)}
        onChange={onChangeHandler}
        value={value}
        placeholder={placeholder}
        type={type}
      />
      {hintText && (
        <div className={`${componentClassName}__hint-text`}>
          <Icon
            size={16}
            iconName="infocircle"
            color="#E32727"
          />
          <Typography
            className={`${componentClassName}__hint-text`}
            variant="text-14"
            font="lato"
          >
            {hintText.toString()}
          </Typography>
        </div>
      )}
    </div>
  )
}
