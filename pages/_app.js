import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.className} bg-mainBlack`}>
      <Head>
        <title>Fare Foto</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
