import React from 'react';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import Link from 'next/link';
import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import CButton from '@/components/common/Button/CButton';
import { images } from '@/assets';

type Props = {
  open: boolean;
};

const ChangePasswordSucess = ({ open }: Props) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <VisuallyHidden.Root>
          <DialogHeader>
            <DialogTitle />
          </DialogHeader>
        </VisuallyHidden.Root>
        <div className="flex flex-col gap-[40px] items-center w-full">
          <div className="flex flex-col gap-10 items-center">
            <Image
              src={images.successTadaImg}
              alt="sucess-tada"
              width={100}
              height={150}
              className="object-contain"
            />

            <div className="flex flex-col gap-2">
              <h4 className="heading-4 font-bold text-center text-foreground">
                Password Update Successfully
              </h4>

              <p className="body-1 font-light text-gray-500 text-center">
                Your password has been update successfully
              </p>
            </div>
          </div>
          <Link href="/login" passHref className="w-full">
            <CButton className="w-full">Back to Login</CButton>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordSucess;
