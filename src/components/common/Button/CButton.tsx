import { ReactNode } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

interface Props extends ButtonProps {
  children?: ReactNode;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

const CButton = ({ children, leftSection, rightSection, ...props }: Props) => {
  return (
    <Button {...props}>
      {leftSection}
      {children}
      {rightSection}
    </Button>
  );
};

export default CButton;
