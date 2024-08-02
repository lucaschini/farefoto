import Image from "next/image";
import Link from "next/link";

export default function HeroPais() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-blue-800 h-screen p-6 md:p-0">
        <div className="md:w-[800px] md:h-[800px]">
            <Image src="/dia_dos_pais.png" width={600} height={600} layout="responsive" alt="Dia dos pais" className="aspect-square"/>
        </div>
        <div className="flex flex-col items-center">
            <div>
            <Image src="/caneca.svg" width={767} height={770} layout="responsive" alt="Dia dos pais"/>
            </div> 
            <Link href='/'><button className="px-4 py-3 shadow-xl text-blue-800 bg-white font-bold rounded-lg text-xl w-fit hover:bg-blue-800 hover:text-white hover:outline-white hover:outline hover:outline-4">Confira nossos produtos</button></Link>
        </div>
    </div>
  );
}
