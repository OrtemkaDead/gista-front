'use client'

import classnames from 'classnames'
import { memo, useState } from 'react'

import { Typography } from '@/shared'

import GistaLayersProps, { Layer } from './gista-layers.types'
import './styles.scss'

const MockLayers: Layer[] = [
  {
    id: '1',
    title: 'Молекулярный слой',
  },
  {
    id: '2',
    title: 'Слой грушевидных нейронов',
  },
  {
    id: '3',
    title: 'Зернистый слой',
  },
  {
    id: '4',
    title: 'Мозговое вещество',
  },
]

export const GistaLayers: React.FC<GistaLayersProps> = ({ className = '', layers }) => {
  const [activeLayer, setActiveLayer] = useState<string>('1')

  //* ClassNames
  const componentClassName = 'gista-layers'
  const GistaLayersClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className={GistaLayersClassName}>
      {layers.map((layer) => (
        <div
          onClick={(): void => setActiveLayer(layer.id)}
          key={layer.id}
          className={
            layer.id === activeLayer
              ? `${GistaLayersClassName}__layer--active`
              : `${GistaLayersClassName}__layer`
          }
        >
          <Typography
            font="lato"
            variant="text-16"
          >
            {layer.title}
          </Typography>
        </div>
      ))}
    </div>
  )
}

export default memo(GistaLayers)
