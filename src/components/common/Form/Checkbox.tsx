import { CheckboxProps } from '@radix-ui/react-checkbox';

import { Checkbox } from '@/components/ui/checkbox';

interface Props extends CheckboxProps {
  label: string;
}

const CheckboxInput = ({ id, label, ...props }: Props) => {
  return (
    <div className="flex items-center gap-[10px]">
      <Checkbox id={id} {...props} />

      <label htmlFor={id} className="body-1 font-light text-foreground">
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
