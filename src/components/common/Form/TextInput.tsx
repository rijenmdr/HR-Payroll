'use client';
import { ChangeEvent, useState } from 'react';
import { Input, InputProps } from '@/components/ui/input';

interface Props extends InputProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const TextInput = ({ id, value, onChange, placeholder, ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

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
        {...props}
        className={`${value ? 'border-primary' : ''}`}
      />
    </div>
  );
};

export default TextInput;
