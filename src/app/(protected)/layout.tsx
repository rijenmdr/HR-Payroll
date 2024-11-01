import { ViewTransitions } from 'next-view-transitions';

import { AppSidebar } from '@/components/layout/dashboard/AppSidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import Header from '@/components/layout/dashboard/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <SidebarProvider
        style={
          {
            '--sidebar-width': '20rem',
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          <div className="py-5">
            <Header />
            <main className="pl-[30px] md:pl-[0px] pr-[30px] mt-20 min-h-[calc(100svh-theme(spacing.20))]">
              {children}
            </main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ViewTransitions>
  );
}
