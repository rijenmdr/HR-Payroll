'use client';
import { useState } from 'react';
import { Input, InputProps } from '@/components/ui/input';
import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';

interface Props extends InputProps {
  id: string;
  error?: FieldError;
  placeholder: string;
}

const TextInput = ({ id, value, placeholder, error, ...props }: Props) => {
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
        value={value}
        {...props}
        className={cn(
          `${value ? 'border-primary' : ''}`,
          `${error ? 'border-destructive' : ''}`
        )}
      />
    </div>
  );
};

export default TextInput;
