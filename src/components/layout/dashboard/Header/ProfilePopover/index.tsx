'use client';

import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { ArrowDown01Icon, Logout01Icon, Settings01Icon } from 'hugeicons-react';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { logout } from '@/lib/action/user.action';

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
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
      </PopoverTrigger>
      <PopoverContent className="w-80 mt-4" align="end">
        <div className="flex items-center gap-4 p-2">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="/placeholder.svg?height=64&width=64"
              alt="@johndoe"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">John Doe</h4>
            <p className="text-xs text-muted-foreground">johndoe@example.com</p>
          </div>
        </div>
        <Separator className="my-2" />
        <nav className="flex flex-col gap-2">
          <Link
            href={'/'}
            className="flex items-center text-foreground justify-start gap-2 body-2 px-2 py-2 hover:bg-gray-100 rounded-[8px]"
          >
            <Settings01Icon className="h-4 w-4" />
            Settings
          </Link>
        </nav>
        <Separator className="my-2" />
        <p
          onClick={logout}
          className="flex items-center text-foreground justify-start gap-2 body-2 px-2 py-2 hover:bg-gray-100 rounded-[8px] cursor-pointer"
        >
          <Logout01Icon className="h-4 w-4" />
          Logout
        </p>
      </PopoverContent>
    </Popover>
  );
}
