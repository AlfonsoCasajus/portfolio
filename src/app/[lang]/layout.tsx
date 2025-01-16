import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Image from 'next/image'

// Providers
import { Providers } from "../providers";

// Components
import { NavBar } from "../components/navigation/Navbar"
import Head from "next/head";

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
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <body
            className={`${montserrat.variable} antialiased relative`}
            >
              <Providers>
                <NavBar />
                <main>
                  {children}
                </main>
                <footer className="flex items-center justify-center gap-5 p-4 bg-[#78BBC4] dark:bg-[#002C3E]">
                  <a
                    href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"
                  >
                    <Image
                      src="/logos/linkedin.svg"
                      width={50}
                      height={50}
                      alt="Linkedin Logo"
                    />
                  </a>
                  <span className="text-slate-800 dark:text-white">casajus.alfonso@gmail.com</span>
                  <a
                    href="https://github.com/AlfonsoCasajus" target="_blank" rel="noopener noreferrer"
                    className="dark:bg-gray-200 rounded-full"
                  >
                    <Image
                      src="/logos/github.svg"
                      width={50}
                      height={50}
                      alt="Github Logo"
                    />
                  </a> 
                </footer>
              </Providers>
          </body>
        </html>
  );
}
