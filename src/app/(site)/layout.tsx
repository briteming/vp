import Navbar from "@/components/navbar";
import Contact from "@/containers/site/Contact";
import Totop from "@/containers/site/totop";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowUpToLine } from "lucide-react";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto pb-12 pt-5 sm:pb-24 sm:pt-12 px-6"
      )}
    >
      {children}
      <Contact />
      <Navbar />
      <Totop></Totop>
    </div>
  );
}
