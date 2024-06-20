import Image from "next/image";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Oferta from "./components/Oferta.jsx"
import Loc from "./components/Loc.jsx";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} bg-gradient-to-r from-orange-400 to-rose-400`}>
    <Header/>
    <Hero/>
    <Oferta/>
    <Loc/>
    </div>
  );
}
