import type { ReactNode } from "react";
export interface ModalProps {
  open: boolean;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  onClose?: () => void;
  className?: string;
}
export declare function Modal(props: ModalProps): JSX.Element | null;
