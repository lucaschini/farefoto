import Header from "@/components/Header";
import products from "@/api/products";
import Image from "next/image";

export default function Catalogo() {
  return (
    <div className="bg-[#1D1D1D]">
      <Header />
      <div className=" flex flex-col items-center pt-10">
        <div className="pl-5 lg:pl-0 pb-5 text-xl">
          <h1>Produtos</h1>
        </div>
        <div className="flex flex-col items-center 2xl:grid-cols-3 lg:grid lg:grid-cols-2 lg:grid-flow-row gap-6">
          {products.map((product) => (
            <a href={`${product.link}`} key={product.id} target="_blank">
              <div className="h-[378px] w-[300px] lg:h-[569px] lg:w-[450px] bg-white text-black shadow-xl hover:shadow-2xl flex flex-col justify-between">
                <Image src={product.img} width={500} height={500} alt="" />
                <div className="flex flex-col justify-between gap-4 text-xl sm:text-3xl py-4 px-6 ">
                  <h2 className="font-normal">{product.title}</h2>
                  <div className="flex justify-between">
                    <h2>{product.price}</h2>
                    <btn className="font-semibold">Comprar</btn>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
