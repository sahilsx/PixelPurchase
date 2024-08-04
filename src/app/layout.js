import { Inter } from "next/font/google";


import Navbar from "@/components/server/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PP",
  description: "CREATED BY SAHIL ALTAF",
};

export default function RootLayout({ children }) {
  return (
   
    
    <html lang="en">
        
      <body >
      <Navbar/>
        {children}
      
      </body>
    </html>
   
  );
}
