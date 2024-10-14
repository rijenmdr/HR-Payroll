'use client';
import { ChangeEvent, useState } from 'react';
import { Input, InputProps } from '@/components/ui/input';
import { ViewIcon, ViewOffSlashIcon } from 'hugeicons-react';

interface Props extends Omit<InputProps, 'type'> {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const PasswordInput = ({
  id,
  value,
  onChange,
  placeholder,
  ...props
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 font-light  transition-all
          ${isFocused || value ? 'text-[11px] block top-[14px] text-primary' : 'cursor-text text-base text-gray-300'}`}
      >
        {placeholder}
      </label>
      <Input
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        value={value}
        type={!showPassword ? 'password' : 'text'}
        {...props}
        className={`${value ? 'border-primary' : ''}`}
      />

      <div
        onClick={togglePassword}
        className="absolute cursor-pointer top-1/3 right-3 bg-background"
      >
        {!showPassword ? <ViewOffSlashIcon /> : <ViewIcon />}
      </div>
    </div>
  );
};

export default PasswordInput;
