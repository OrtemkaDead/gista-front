export interface IModalLayout {
    nonClosing?: boolean;
    onClose?: () => void;
    actionsOnClose?: () => void;
    children: React.ReactNode;
    exitIcon?: boolean;
    topPosition?: number;
    rightPosition?: number;
    zIndex?: number;
    // iconStyles?: React.CSSProperties;
}