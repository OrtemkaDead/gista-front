'use client'

import classnames from 'classnames'

import { Button, Icon, Typography } from '@/ui-kit'

import ModalProps from './modal.types'
import './styles.scss'

export const Modal: React.FC<ModalProps> = ({
  className = '',
  active = false,
  children,
  title = 'Title',
  setActive,
  onAddButton,
  onCancelButton,
  mainButtonTitle,
}) => {
  //* ClassNames
  const componentClassName = 'modal'
  const ModalClassName = classnames(
    componentClassName,

    className,
  )

  return (
    <div className={active ? `${componentClassName} active` : componentClassName}>
      <div
        className={
          active ? `${componentClassName}__content active` : `${componentClassName}__content`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${componentClassName}__close`}>
          <Button
            type="borderless"
            leftIcon={
              <Icon
                color="#007FFF"
                iconName="close"
              />
            }
            onClick={() => setActive(false)}
          />
        </div>
        <div className={`${componentClassName}__container`}>
          <Typography
            className={`${componentClassName}__title`}
            variant="headline-h2"
            font={'ntSomic400'}
          >
            {title}
          </Typography>
          {children}
          <div className={`${componentClassName}__btns`}>
            <Button onClick={onAddButton}>{mainButtonTitle}</Button>
            <Button
              onClick={onCancelButton}
              type="borderless"
            >
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
