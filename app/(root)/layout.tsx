import Footer from '@/components/shared/Footer';
import Headers from '@/components/shared/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Headers />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
