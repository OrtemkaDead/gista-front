import classnames from 'classnames'
import { FC, memo } from 'react'

import { Button, Icon, Typography } from '@/shared'

import { IModalContentProps } from './modal-content.types'
import './styles.scss'

const ModalContent: FC<IModalContentProps> = ({
  title,
  content,
  description,
  confirmBtnText,
  handleConfirm,
  handleCancel,
  attentionIcon,
  reverseButtonDirection,
}) => {
  const componentClassName = 'modal-content'

  const ModalContentClassNames = classnames(componentClassName, {
    [`${componentClassName}--without-buttons`]: !confirmBtnText,
  })

  const ButtonWrapperClassName = classnames(`${componentClassName}__button-wrapper`, {
    [`${componentClassName}__button-wrapper--attention`]: attentionIcon,
    [`${componentClassName}__button-wrapper--attention`]: attentionIcon,
  })

  return (
    <div className={ModalContentClassNames}>
      {attentionIcon && (
        <div className={`${componentClassName}__attention-icon`}>
          <Icon
            iconName="attention"
            size={64}
            viewBox={64}
            color="#E32727"
          />
        </div>
      )}

      <Typography
        font="ntSomic"
        variant="headline-h2"
        className={`${componentClassName}__title`}
      >
        {title}
      </Typography>

      {content && <div className={`${componentClassName}__content`}>{content}</div>}

      {description && (
        <Typography
          font="lato"
          variant="text-14"
          className={`${componentClassName}__description`}
        >
          {description}
        </Typography>
      )}

      {confirmBtnText && (
        <div className={ButtonWrapperClassName}>
          <Button
            size="large"
            type={'borderless'}
            onClick={reverseButtonDirection ? handleCancel : handleConfirm}
          >
            {reverseButtonDirection ? 'Отмена' : confirmBtnText}
          </Button>

          <Button
            size="large"
            type={'primary'}
            onClick={reverseButtonDirection ? handleConfirm : handleCancel}
          >
            {reverseButtonDirection ? confirmBtnText : 'Отмена'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default memo(ModalContent)
