import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Image from 'next/image'

// Components
import { NavBar } from "./components/navigation/Navbar"

const montserrat = Montserrat({
  subsets: ["latin"], // Selecciona el idioma
  weight: ["400", "700"], // Pesos que necesitas (opcional)
  variable: "--font-montserrat", // Nombre de la variable CSS (opcional)
});


export const metadata: Metadata = {
  title: "Alfonso Casajus Ponce - CV",
  description: "Portfolio personal",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="es" suppressHydrationWarning>
            <body
              className={`${montserrat.variable} antialiased`}
              >
                <Providers>
                  <header><NavBar /></header>
                  <main>
                    {children}
                  </main>
                  <footer className="flex items-center justify-center gap-5 p-4 bg-blue-200">
                    <Image
                      src="/logos/github.svg"
                      width={50}
                      height={50}
                      alt="Github Logo"
                    />
                    <span>casajus.alfonso@gmail.com</span>
                    <Image
                       src="/logos/linkedin.svg"
                       width={50}
                       height={50}
                       alt="Linkedin Logo"
                    />
                  </footer>
                </Providers>
            </body>
        </html>
  );
}
