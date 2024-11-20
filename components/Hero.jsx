import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-red-700 p-6 py-10 md:py-16 gap-11">
        <div className="md:w-[500px] md:h-[500px] w-[300px] h-[300px]">
            <Image src="/img_hero.webp" width={400} height={400} layout="responsive" alt="Dia dos pais" className="aspect-square"/>
        </div>
        <div className="flex flex-col items-center gap-10">
            <div>
            <h1 className="md:text-4xl text-2xl font-bold text-white text-center">🎄 Celebre o Natal com Memórias Inesquecíveis! </h1>
            </div> 
            <Link href='/'><button className="px-4 py-3 shadow-xl text-red-700 bg-white font-bold rounded-lg text-xl w-fit hover:bg-red-700 hover:text-white hover:outline-white hover:outline hover:outline-4">Confira nossos produtos</button></Link>
        </div>
    </div>
  );
}
