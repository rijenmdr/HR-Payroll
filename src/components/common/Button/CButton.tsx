import { ReactNode } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Loading03Icon } from 'hugeicons-react';

interface Props extends ButtonProps {
  loading?: boolean;
  children?: ReactNode;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

const CButton = ({
  loading = false,
  children,
  leftSection,
  rightSection,
  disabled,
  ...props
}: Props) => {
  return (
    <Button disabled={loading || disabled} {...props}>
      {loading ? <Loading03Icon className="w-4 h-4 animate-spin" /> : null}
      {leftSection}
      {children}
      {rightSection}
    </Button>
  );
};

export default CButton;
