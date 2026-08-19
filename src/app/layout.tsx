import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/context/BookingContext";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "NARASA | Kampung Ketupat Local Experience",
  description: "Muslim-Friendly Local Experience Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${fontSerif.variable} antialiased font-sans`}>
        <BookingProvider>
          {children}
        </BookingProvider>
      </body>
    </html>
  );
}
