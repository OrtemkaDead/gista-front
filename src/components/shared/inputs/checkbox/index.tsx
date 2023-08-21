import classnames from 'classnames'
import { memo, useCallback } from 'react'

import { Icon, Typography } from '@/shared'

import CheckboxProps from './checkbox.types'
import './styles.scss'

const Checkbox: React.FC<CheckboxProps> = ({
  className = '',
  value = false,
  setValue,
  label = '',
}) => {
  //* ClassNames
  const componentClassName = 'checkbox'
  const CheckboxClassName = classnames(
    componentClassName,
    {
      [`${componentClassName}--checked`]: value,
    },

    className,
  )

  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (setValue) {
        setValue(event.target.checked)
      }
    },
    [setValue],
  )

  return (
    <div
      className={CheckboxClassName}
      onClick={() => setValue(!value)}
    >
      <input
        type="checkbox"
        checked={value}
        onChange={onChangeHandler}
        hidden
      />
      <Icon
        iconName="done"
        viewBox={35}
      />

      <Typography
        className={`${componentClassName}__label`}
        font="lato400"
        variant="text-16"
        tag="span"
      >
        {label}
      </Typography>
    </div>
  )
}

export default memo(Checkbox)
