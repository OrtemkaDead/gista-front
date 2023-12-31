'use client'

import { Zoom } from '@/components/features/zoom'
import classnames from 'classnames'
import Image from 'next/image'
import { memo, useRef, useState } from 'react'
import { ReactZoomPanPinchRef, TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'

import GistaTestImg from '@/assets/images/gista-test.png'

import GistaProps from './gista.types'
import './styles.scss'

export const Gista: React.FC<GistaProps> = ({ className = '' }) => {
  const transformComponentRef: React.RefObject<ReactZoomPanPinchRef> = useRef(null)
  const [scale, setScale] = useState<number>(1)

  const updateScale = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const targetScale = parseFloat(e.target.value)
    const factor = Math.log(targetScale / scale)

    if (transformComponentRef && transformComponentRef.current) {
      const { zoomIn, zoomOut } = transformComponentRef.current
      if (targetScale > scale) {
        zoomIn(factor, 0)
      } else {
        zoomOut(-factor, 0)
      }
    }

    setScale(targetScale)
  }

  //* ClassNames
  const componentClassName = 'gista'
  const GistaClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className={GistaClassName}>
      <Zoom
        className={`${GistaClassName}__zoom`}
        value={scale}
        onChange={updateScale}
      />
      <TransformWrapper
        ref={transformComponentRef}
        onZoomStop={(e) => {
          setScale(e.state.scale)
        }}
        initialScale={scale}
        minScale={1}
        maxScale={15}
        doubleClick={{
          disabled: true,
        }}
        centerZoomedOut
        limitToBounds={false}
        zoomAnimation={{ disabled: true }}
        centerOnInit
        onZoom={(e) => {
          setScale(e.state.scale)
        }}
      >
        {({ zoomIn, zoomOut, setTransform, ...rest }) => {
          return (
            <TransformComponent
              wrapperStyle={{
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            >
              <Image
                src={GistaTestImg}
                alt="gista"
              />
            </TransformComponent>
          )
        }}
      </TransformWrapper>
    </div>
  )
}

export default memo(Gista)
