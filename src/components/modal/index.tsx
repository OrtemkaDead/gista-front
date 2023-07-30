import classnames from 'classnames'

import { Button, Icon, Typography } from '@/ui-kit'

import ModalProps from './modal.types'
import './styles.scss'

//Todo: Миша, перепиши модалку с нормальным бэмом(!!!!) и всякое такое

export const Modal: React.FC<ModalProps> = ({
  active,
  children,
  title,
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
    <div className={active ? 'modal active' : 'modal'}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__close">
          <Button
            type="borderless"
            leftIcon={
              <Icon
                color="#007FFF"
                iconName="close"
              />
            }
            onClick={() => setActive(!active)}
          />
        </div>
        <div className="modal__content__container">
          <Typography
            className="modal__content__title"
            variant="headline-h2"
          >
            {title}
          </Typography>
          {children}
          <div className="modal__btns">
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
