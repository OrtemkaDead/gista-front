import { FC, MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { Icon } from '@/ui-kit'

import { IModalLayout } from './modal-layout.types'
import './styles.scss'

export const ModalLayout: FC<IModalLayout> = ({
  nonClosing,
  onClose,
  actionsOnClose,
  children,
  exitIcon,
  zIndex = 10,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null)

  const [mounted, setMounted] = useState(false)

  const componentClassName = 'modal-layout'

  //! useCallback
  const handleExit = useCallback(
    () => {
      setMounted(false)
      onClose && onClose()
      actionsOnClose && actionsOnClose()
    },
    [actionsOnClose, onClose],
  )

  const clickOutside = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target instanceof Node && !contentRef.current?.contains(event.target)) {
        handleExit()
      }
    },
    [handleExit]
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? createPortal(
    <div
      className={componentClassName}
      style={{ zIndex: zIndex }}
      onClick={!nonClosing ? clickOutside : undefined}
    >
      <div
        className={`${componentClassName}__content`}
        ref={contentRef}
      >
        {children}

        {exitIcon && (
          <button
            className={`${componentClassName}__button`}
            onClick={handleExit}
          >
            <Icon iconName="close" />
          </button>
        )}
      </div>
    </div>,
    document.querySelector<HTMLDivElement>('#modal_root') as HTMLDivElement,
  )
    : null
}
