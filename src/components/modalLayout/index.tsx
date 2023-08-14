import React, { useEffect, useRef, FC, ReactNode, useState, MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';
import { IModalLayout } from './modalLayout.types';
import { Icon } from '@/ui-kit';
import './styles.scss';

export const ModalLayout: FC<IModalLayout> = ({
  nonClosing,
  onClose,
  actionsOnClose,
  children,
  exitIcon,
  topPosition,
  rightPosition,
  zIndex = 10,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [mounted, setMounted] = useState(false);

  const componentClassName = 'modal-layout'

  const handleExit: MouseEventHandler<HTMLButtonElement> = () => {
    setMounted(false);
    onClose && onClose();
    actionsOnClose && actionsOnClose();
  }

  useEffect(() => {
    modalRef.current = document.querySelector<HTMLDivElement>("#modal_root");

    setMounted(true);

    function handleClick(event: MouseEvent): void {
      if (event.target instanceof Node && !contentRef.current?.contains(event.target)) {
        setMounted(false);
        onClose && onClose();
        actionsOnClose && actionsOnClose();
      }
    }

    if (!nonClosing) {
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      }
    }
  }, []);

  return (mounted && modalRef.current) ?
    createPortal(
      <div className={componentClassName} style={{ zIndex: zIndex }}>
        <div className={`${componentClassName}__content`} ref={contentRef}>

          {children}

          {exitIcon && (
            <button
              className={`${componentClassName}__button`}
              style={{ top: topPosition, right: rightPosition }}
              onClick={handleExit}
            >
              <Icon iconName='close' />
            </button>
          )}

        </div>
      </div>, modalRef.current)
    : null
}


