import { Button, Icon, Typography } from "@/ui-kit";
import { FC } from "react";
import { IModalContentProps } from "./modalContent.types";
import classnames from "classnames";
import './styles.scss';

export const ModalContent: FC<IModalContentProps> = ({
  title,
  content,
  description,
  confirmBtnText,
  handleConfirm,
  handleCansel,
  attentionIcon
}) => {

  const componentClassName = 'modal-content';

  const WrapperClassName = classnames(
    `${componentClassName}__btnWrapper`,
    {
      [`${componentClassName}__btnWrapper--attention`]: attentionIcon
    }
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

      {content && (
        <div className={`${componentClassName}__content`}>
          {content}
        </div>
      )}

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
            size='large'
            type={'primary'}
            onClick={attentionIcon ? handleCansel : handleConfirm}
          >
            {attentionIcon ? 'Отмена' : confirmBtnText}
          </Button>

          <Button
            size='large'
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