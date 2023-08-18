import classnames from 'classnames'
import { memo } from 'react'

import { Icon } from '@/ui-kit'

import CheckboxProps from './checkbox.types'
import './styles.scss'

export const Checkbox: React.FC<CheckboxProps> = memo(function Checkbox({
  className = '',
  state = false,
  onClick,
}) {
  //* ClassNames
  const componentClassName = 'checkbox'
  const CheckboxClassName = classnames(
    componentClassName,
    {
      [`${componentClassName}--checked`]: state,
    },

    className,
  )

  return (
    <div
      onClick={onClick}
      className={CheckboxClassName}
    >
      {state && (
        <Icon
          iconName="done"
          viewBox={35}
          color="#fff"
        />
      )}
    </div>
  )
})
