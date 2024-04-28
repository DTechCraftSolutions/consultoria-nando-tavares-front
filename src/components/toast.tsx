import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ToastProvider: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};


