import TypographyProps from "@/ui-kit/typography/typography.types";

export interface IModalContentProps extends TypographyProps {
  title: string;
  description?: string;
  content?: React.JSX.Element;
  confirmBtnText?: string;
  handleConfirm?: () => void;
  handleCansel?: () => void;
  attentionIcon?: boolean;
}