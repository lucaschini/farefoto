import Image from "next/image";

import Header from "./components/Header";
import Hero from './components/Hero';
import Oferta from "./components/Oferta"
import Loc from "./components/Loc";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} bg-white`}>
    <Header/>
    <Hero/>
    <Oferta/>
    <Loc/>
    </div>
  );
}
