import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <Navbar />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
