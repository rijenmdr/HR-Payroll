'use client';

import Image from 'next/image';

import { images } from '@/assets';
import useValueBasedOnTheme from '@/hook/useValueBasedOnTheme';

const LogoImage = () => {
  const { value } = useValueBasedOnTheme({
    darkModeValue: images.logoWithTextDark,
    lightModeValue: images.logoWithTextLight,
  });

  return (
    <Image
      src={value}
      alt="HRMS-logo"
      width={180}
      height={73}
      priority
      className="w-[180px] h-[73px]"
    />
  );
};

export default LogoImage;
