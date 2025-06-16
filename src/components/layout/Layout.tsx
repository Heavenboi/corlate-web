import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="fixed inset-0 bg-grid opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background" />
      <Navbar />
      <main className="flex-grow relative z-10 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 