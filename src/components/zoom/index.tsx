'use client'

import classnames from 'classnames'
import { useState } from 'react'

import { Icon } from '@/ui-kit'

import './styles.scss'
import ZoomProps from './zoom.types'

export const Zoom: React.FC<ZoomProps> = ({ className = '' }) => {
  const [zoom, setZoom] = useState<number>(1)

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
        color="#007FFF"
      />
      <input
        type="range"
        min={0}
        max={1}
        step={0.02}
        aria-orientation="vertical"
        value={zoom}
        onChange={(event) => {
          setZoom(event.target.valueAsNumber)
        }}
      />
      <Icon
        iconName="searchzoomout"
        color="#007FFF"
      />
    </div>
  )
}
