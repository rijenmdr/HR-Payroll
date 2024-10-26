'use client';
import Image from 'next/image';

import { images } from '@/assets';
import useValueBasedOnTheme from '@/hook/useValueBasedOnTheme';

const AuthLeft = () => {
  const { value } = useValueBasedOnTheme({
    darkModeValue: images.authDark,
    lightModeValue: images.authLight,
  });
  return (
    <section className="h-screen hidden md:block flex-[1.5] xl:flex-[2] p-10">
      <div className="relative w-full h-full flex justify-end dark:bg-white bg-primary-100 rounded-[30px]">
        <Image
          src={value}
          alt={'auth'}
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="!w-auto py-[70px] pl-[130px]"
        />
      </div>
    </section>
  );
};

export default AuthLeft;
