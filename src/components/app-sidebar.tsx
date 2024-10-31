'use client';
import * as React from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import useValueBasedOnTheme from '@/hook/useValueBasedOnTheme';
import { images } from '@/assets';
import { sidebarLinks, themeSwitch } from '@/static/sidebar';
import { SwitchTab } from './common/Form/SwitchTab';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const { value } = useValueBasedOnTheme({
    darkModeValue: images.logoWithTextDark,
    lightModeValue: images.logoWithTextLight,
  });
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <Image src={value} alt="logo" width={120} height={50} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sidebarLinks.navMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname.includes(item.url)}>
                <Link
                  href={item.url}
                  className="body-1 font-light text-foreground hover:!text-primary"
                >
                  <item.icon
                    style={{
                      width: '24px',
                      height: '24px',
                      fontWeight: 'bold',
                    }}
                  />
                  {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarFooter>
          <SwitchTab label="theme-switch">
            {themeSwitch.map((theme) => (
              <SwitchTab.Item key={theme.id} icon={theme.icon} id={theme.id}>
                {theme.label}
              </SwitchTab.Item>
            ))}
          </SwitchTab>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
