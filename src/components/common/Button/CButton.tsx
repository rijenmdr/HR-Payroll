import { ReactNode } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

interface Props extends ButtonProps {
  children?: ReactNode;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

const CButton = ({
  children,
  leftSection,
  rightSection,
  disabled,
  ...props
}: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending || disabled} {...props}>
      {pending ? 'Loading' : ''}
      {leftSection}
      {children}
      {rightSection}
    </Button>
  );
};

export default CButton;
