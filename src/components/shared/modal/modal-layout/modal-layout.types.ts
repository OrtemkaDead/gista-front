export interface IModalLayout {
  nonClosing?: boolean;
  onClose?: () => void;
  actionsOnClose?: () => void;
  children: React.ReactNode;
  exitIcon?: boolean;
  zIndex?: number;
}