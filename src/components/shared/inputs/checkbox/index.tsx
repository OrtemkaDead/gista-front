import classnames from 'classnames'
import { memo, useCallback } from 'react'

import { Icon } from '@/shared'

import CheckboxProps from './checkbox.types'
import './styles.scss'

const Checkbox: React.FC<CheckboxProps> = ({ className = '', value = false, setValue }) => {
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
    <label className={CheckboxClassName}>
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
    </label>
  )
}

export default memo(Checkbox)
