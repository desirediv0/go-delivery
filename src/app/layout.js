import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Go Delivery ",
  description: "At GoDelivery Rental, we make it easy for businesses to get the vehicles they need for deliveries without the hassle of owning them. Whether you run a restaurant, a retail store, or an online shop, we offer scooter rentals that help you deliver faster and more efficiently. We provide flexible rental options—whether you need a scooter for a day, a month, or longer. Our scooters are well-maintained, affordable, and ready to hit the road.",
  verification: {
    google: "googlee7554feb05d0eefe",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}