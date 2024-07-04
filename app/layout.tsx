import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrains_Mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrains-mono'

});

export const metadata = {
  title: " 1° WeD PE 24.1",
  description: "1° WorkShop de Engenharia de dados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrains_Mono.variable}>
        <Header/>
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
