import AuthLeft from '@/components/layout/auth/AuthLeft';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-[100dvh]">
      <AuthLeft />
      <section className="flex-1 flex items-center px-4 md:px-0 md:pr-[100px] w-full">
        {children}
      </section>
    </main>
  );
}
