import "@/styles/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ["latin"]
});

export const metadata = {
  title: 'Fare Foto',
  description: 'A melhor loja de fotografia!',
}

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.className} bg-[#1D1D1D]`}>
      <Component {...pageProps} />
    </main>
  )
}
