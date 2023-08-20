'use client'

import classnames from 'classnames'
import { memo } from 'react'

import { Icon } from '@/ui-kit'

import './styles.scss'
import ZoomProps from './zoom.types'

export const Zoom: React.FC<ZoomProps> = memo(function Zoom({ className = '', value, onChange }) {
  //* ClassNames
  const componentClassName = 'zoom'
  const ZoomClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className={ZoomClassName}>
      <Icon
        iconName="searchzoomin"
        //через классы не меняется цвет и почему-то меняется размер иконки
        //короче выглядит ужасно поэтому пока так оставил
        color="#007FFF"
      />
      <input
        type="range"
        min="1"
        max="15"
        step="0.01"
        aria-orientation="vertical"
        value={value}
        onChange={onChange}
      />
      <Icon
        iconName="searchzoomout"
        color="#007FFF"
      />
    </div>
  )
})
