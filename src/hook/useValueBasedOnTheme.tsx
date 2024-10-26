'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

type Props<T> = {
  darkModeValue: T;
  lightModeValue: T;
};

const useValueBasedOnTheme = <T,>({
  darkModeValue,
  lightModeValue,
}: Props<T>) => {
  const { theme } = useTheme();
  const [value, setValue] = useState<T>(lightModeValue);

  useEffect(() => {
    if (theme) {
      setValue(theme === 'dark' ? darkModeValue : lightModeValue);
    }
  }, [theme, darkModeValue, lightModeValue]);

  return { value };
};

export default useValueBasedOnTheme;
