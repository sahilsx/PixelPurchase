import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/server/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BICANNO",
  description: "CREATED BY SAHIL ALTAF",
};

export default function RootLayout({ children }) {
  return (
   
    
    <html lang="en">
        
      <body className={inter.className}>
      <Navbar/>
        {children}
      
      </body>
    </html>
   
  );
}
