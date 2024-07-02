import "@/styles/globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({ 
  weight: ['300', '500', '700'],
  subsets: ["latin"]
});

export const metadata = {
  title: 'Fare Foto',
  description: 'A melhor loja de fotografia!',
}

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.className} bg-mainBlack`}>
      <Component {...pageProps} />
    </main>
  )
}
