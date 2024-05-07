import Header from "./components/header";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./components/hero";
import Oferta from "./components/oferta"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} bg-gradient-to-r from-orange-400 to-rose-400`}>
    <Header/>
    <Hero/>
    <Oferta/>
    </div>
  );
}
