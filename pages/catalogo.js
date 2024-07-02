import Header from "@/components/Header";
import products from "@/api/products";
import Image from "next/image";

export const metadata = {
  title: 'Produtos',
  description: 'Produtos - Fare Foto',
}

import { useState } from "react";

export default function Catalogo() {
  const [busca, setBusca] = useState("");

  const arr = products;
  const buscaLower = busca.toLowerCase();

  const buscaFiltrada = arr.filter((product) =>
    product.title.toLowerCase().includes(buscaLower)
  );

  return (
    <div>
      <Header />
      <div className=" flex flex-col items-center pt-10">
        <div className="pl-5 lg:pl-0 pb-5 text-2xl lg:text-4xl font-semibold">
          <h1>Produtos</h1>
        </div>
        <label class="mb-10 w-3/4 lg:w-1/4">
          <span class="sr-only">Search</span>
          <input
            class="placeholder:italic placeholder:text-white bg-transparent w-full border rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm"
            placeholder="Procure mais produtos"
            type="text"
            name="search"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />
        </label>

        <div className=" grid grid-cols-2 lg:grid-flow-row 2xl:grid-cols-3 gap-6">
          {buscaFiltrada.map((product) => (
            <a
              href={`${product.link} ${product.title}`}
              key={product.id}
              target="_blank"
            >
              <div className="max-w-44 max-h-64  md:max-w-[500px] md:max-h-[579px] bg-white text-black shadow-xl hover:shadow-2xl flex flex-col justify-between">
                <Image src={product.img} width={400} height={379} alt="" />
                <div className="flex flex-col justify-between gap-1 lg:gap-4 text-md md:text-3xl p-2 lg:p-5 ">
                  <h2 className="font-normal">{product.title}</h2>
                  <div className="flex justify-between items-center font-semibold">
                    <h2 className="text-orange-600">{product.price}</h2>
                    <btn className=" bg-green-600 p-2 lg:px-4 rounded-full text-white drop-shadow-xl">
                      Comprar
                    </btn>
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
