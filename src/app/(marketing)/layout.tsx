import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import LoadingScreen from "@/components/landing/LoadingScreen";
import { LoadingProvider } from "@/context/LoadingContext";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LoadingProvider>
      <div className="flex flex-col min-h-screen">
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LoadingProvider>
  );
}
