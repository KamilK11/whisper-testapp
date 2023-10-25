import type { Metadata } from "next";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { DataProvider } from "@/contexts/DataContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "Voice to Text App",
  description: "Test App for Speech to Text ML backend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          fontSans.variable,
        )}
      >
        <DataProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
            <Toaster />
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
