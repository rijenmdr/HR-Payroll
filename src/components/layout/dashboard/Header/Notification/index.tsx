import { Button } from '@/components/ui/button';
import { Notification03Icon } from 'hugeicons-react';

const Notification = () => {
  return (
    <Button variant={'gray'} size={'icon'} className="flex-shrink-0">
      <Notification03Icon className="text-foreground w-[16px] h-[16px] flex-shrink-0" />
    </Button>
  );
};

export default Notification;
