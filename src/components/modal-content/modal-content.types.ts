export interface IModalContentProps {
  title: string;
  description?: string;
  content?: React.JSX.Element;
  confirmBtnText?: string;
  handleConfirm?: React.MouseEventHandler<HTMLButtonElement>;
  handleCancel?: React.MouseEventHandler<HTMLButtonElement>;
  attentionIcon?: boolean;
  reverseButtonDirection?: boolean;
}