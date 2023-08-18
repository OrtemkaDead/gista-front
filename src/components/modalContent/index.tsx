import classnames from 'classnames'
import { FC } from 'react'

import { Button, Icon, Typography } from '@/ui-kit'

import { IModalContentProps } from './modalContent.types'
import './styles.scss'

export const ModalContent: FC<IModalContentProps> = ({
  title,
  content,
  description,
  confirmBtnText,
  handleConfirm,
  //! cancel...
  handleCansel,
  //! не очивидная зависимость кнопок от этого пропса, хуйня крч
  //! лучше добавить отдельный пропс, типа reverseButtonDirection
  attentionIcon,
}) => {
  const componentClassName = 'modal-content'

  //! поч с тут PascalCase?
  //! buttonWrapperClassName
  const WrapperClassName = classnames(
    //! от сокращений типа btn отказываемся!
    //! от camelCase тоже отказываемся
    `${componentClassName}__btnWrapper`,
    {
      [`${componentClassName}__btnWrapper--attention`]: attentionIcon,
    },
  )

  return (
    <div className={componentClassName}>
      {attentionIcon && (
        <div className={`${componentClassName}__attentionIcon`}>
          <Icon
            iconName="attention"
            size={64}
            viewBox={64}
            color="#E32727"
          />
        </div>
      )}

      <Typography
        font="ntSomic400"
        variant="headline-h2"
        className={`${componentClassName}__title`}
      >
        {title}
      </Typography>

      {content && <div className={`${componentClassName}__content`}>{content}</div>}

      {description && (
        <Typography
          font="lato400"
          variant="text-14"
          className={`${componentClassName}__description`}
        >
          {description}
        </Typography>
      )}

      {confirmBtnText && (
        <div className={WrapperClassName}>
          <Button
            size="large"
            type={'primary'}
            onClick={attentionIcon ? handleCansel : handleConfirm}
          >
            {attentionIcon ? 'Отмена' : confirmBtnText}
          </Button>

          <Button
            size="large"
            type={'borderless'}
            onClick={attentionIcon ? handleConfirm : handleCansel}
          >
            {attentionIcon ? confirmBtnText : 'Отмена'}
          </Button>
        </div>
      )}
    </div>
  )
}
