import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-red-700 h-[52vh] p-6 md:p-0">
        <div className="md:w-[500px] md:h-[500px]">
            <Image src="/dia_dos_pais.png" width={400} height={400} layout="responsive" alt="Dia dos pais" className="aspect-square"/>
        </div>
        {/* <div className="flex flex-col items-center">
            <div>
            <Image src="/caneca.svg" width={300} height={300} layout="responsive" alt="Dia dos pais"/>
            </div> 
            <Link href='/'><button className="px-4 py-3 shadow-xl text-orange-400 bg-white font-bold rounded-lg text-xl w-fit hover:bg-orange-400 hover:text-white hover:outline-white hover:outline hover:outline-4">Confira nossos produtos</button></Link>
        </div> */}
    </div>
  );
}
