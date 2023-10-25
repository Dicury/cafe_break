import { Poppins } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CarrinhoContextProvider } from "@/context/CarrinhoContext";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <CarrinhoContextProvider>
          <StyledComponentsRegistry>
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </StyledComponentsRegistry>
        </CarrinhoContextProvider>
      </body>
    </html>
  );
}
