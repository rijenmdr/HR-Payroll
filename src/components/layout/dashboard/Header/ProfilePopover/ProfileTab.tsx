import { ArrowDown01Icon } from 'hugeicons-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const ProfileTab = () => {
  return (
    <Button
      variant="outline-gray"
      className="relative p-1 rounded-[8px] justify-between gap-[10px] w-[184px]"
    >
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10 rounded-[8px] border">
          <AvatarImage
            src="/placeholder.svg?height=32&width=32"
            alt="@johndoe"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <p className="body-1 font-bold text-foreground">John Doe</p>
          <p className="caption font-light text-gray-500">HR Manager</p>
        </div>
      </div>
      <ArrowDown01Icon className="text-foreground w-4 h-4" />
    </Button>
  );
};

export default ProfileTab;
