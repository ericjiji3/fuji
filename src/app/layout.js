import localFont from "next/font/local";
import "./globals.css";
import StartingScreen from "@/components/StartingScreen";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CRT from "@/components/CRT";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Fuji Media",
  description: "Digital Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="grid">
        <StartingScreen/>
        <Nav/>
        {children}
        <Footer/>
        <CRT/>
        </div>
      </body>
    </html>
  );
}
