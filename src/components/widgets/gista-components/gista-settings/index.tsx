'use client'

import classnames from 'classnames'
import { memo, useState } from 'react'

import { Checkbox, Icon, Typography } from '@/shared'

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
      <label className={`${GistaSettingsClassName}__checkbox`}>
        <Checkbox
          value={checked}
          setValue={setChecked}
        />
        <Typography
          className={`${GistaSettingsClassName}__title`}
          font="lato"
          variant="text-16"
        >
          Показывать в 4K
        </Typography>
      </label>
      <Icon
        className={`${GistaSettingsClassName}__favorite`}
        iconName="star"
      />
    </div>
  )
}

export default memo(GistaSettings)
