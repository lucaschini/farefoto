
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Maps from "@/components/Maps";

import Image from "next/image";

import oferta from "@/api/productsOferta";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex flex-col gap-12 bg-white p-10">
        <h1 className="font-bold text-4xl text-black">Produtos em oferta</h1>
        <div className="w-full h-52 bg-amber-400 rounded-2xl flex justify-center items-center shadow-lg hover:shadow-xl">
          <h1 className="text-2xl sm:text-4xl font-bold">Pacotes promocionais!</h1>
        </div>
        <div className="flex flex-col gap-10 xl:flex-row w-full justify-between items-center">
          {
            oferta.map((product) => (
              <a href={`${product.link}`} key={product.id} target="_blank" >
                <div className="h-[378px] w-[300px] lg:h-[569px] lg:w-[450px] bg-white text-black shadow-xl hover:shadow-2xl flex flex-col justify-between">
                  <Image src={product.img} width={500} height={500} alt="" />
                  <div className="flex justify-between text-xl sm:text-3xl font-semibold pb-7 px-6">
                    <div className="flex flex-col gap-2">
                      <h2>{product.title}</h2>
                      <p className="text- ">Veja mais</p>
                    </div>
                    <h2>{product.price}</h2>
                  </div>
                </div>
              </a>
            ))
          }
        </div>
      </div>
      <Maps />
    </div>
  );
}
