import "./globals.css";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./provider";
import SideBar from "@/components/sidebar";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CineSuggest",
  description: "Movie recommendation app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <section className="flex">
          <Providers>
            <section>
              <SideBar />
            </section>
            <section className="flex flex-col flex-grow">
              <header className="m-10">
                <NavBar />
              </header>
              {children}
            </section>
          </Providers>
          <Toaster />
        </section>
      </body>
    </html>
  );
}
