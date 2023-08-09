'use client'

import classnames from 'classnames'
import { useState } from 'react'

import { Checkbox, Icon, Typography } from '@/ui-kit'

import GistaSettingsProps from './gista-settings.types'
import './styles.scss'

export const GistaSettings: React.FC<GistaSettingsProps> = ({ className = '' }) => {
  const [checked, setChecked] = useState<boolean>(false)

  //* ClassNames
  const componentClassName = 'gista-settings'
  const GistaSettingsClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className={GistaSettingsClassName}>
      <div className={`${GistaSettingsClassName}__checkbox`}>
        <Checkbox
          onClick={() => setChecked(!checked)}
          state={checked}
        />
        <Typography
          font="lato400"
          variant="text-16"
        >
          Показывать в 4K
        </Typography>
      </div>
      <Icon
        iconName="star"
        color="#FDDD18"
        fill="#FDDD18"
      />
    </div>
  )
}
