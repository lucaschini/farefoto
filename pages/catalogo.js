import Header from "@/components/Header";
import products from "@/api/products";
import Image from "next/image";

import { useState } from "react";

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [busca, setBusca] = useState("");

  const arr = products;
  const buscaLower = busca.toLowerCase();

  const buscaFiltrada = arr
    .filter((product) => product.category.includes(selectedCategory))
    .filter((product) => product.title.includes(buscaLower));

  return (
    <div>
      <Header />
      <div className=" flex flex-col md:flex-row justify-around pt-10 pb-10">
        <div>
          <label class="mb-10 w-3/4 lg:w-1/4">
            <span class="sr-only">Search</span>
            <input
              class="placeholder:italic placeholder:text-white bg-transparent w-full border rounded-full py-2 pl-9 pr-3 shadow-sm sm:text-sm focus:outline-none"
              placeholder="Procure mais produtos"
              type="text"
              name="search"
              value={busca}
              onChange={(ev) => setBusca(ev.target.value)}
            />
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" selected disabled hidden>
              Escolha uma Categoria
            </option>
            <option value="">Todos</option>
            <option value="Álbuns">Álbuns</option>
            <option value="Almofadas">Almofadas</option>
            <option value="Azulejo">Azulejo</option>
            <option value="Calendários">Calendários</option>
            <option value="Canecas">Canecas</option>
            <option value="Câmeras">Câmeras</option>
            <option value="Copos">Copos</option>
            <option value="Filme">Filme</option>
            <option value="Fotos">Fotos</option>
            <option value="Garrafa">Garrafa</option>
            <option value="Instax">Instax</option>
            <option value="Mousepads">Mousepads</option>
            <option value="Quadros">Quadros</option>
            <option value="Quebra Cabeça">Quebra Cabeça</option>
            <option value="Revelações">Revelações</option>
            <option value="Roupas">Roupas</option>
            <option value="Taças">Taças</option>
          </select>
          <div className="pl-5 lg:pl-0 pb-5 text-2xl lg:text-4xl font-semibold ">
            <h1>Produtos</h1>
          </div>
        </div>
        <div className=" grid grid-cols-2 lg:grid-flow-row 2xl:grid-cols-3 gap-4">
          {buscaFiltrada.map((product) => (
            <a
              href={`${product.link} ${product.title}`}
              key={product.id}
              target="_blank"
            >
              <div className="h-64 w-52 md:h-[550px] md:w-[400px] bg-white text-black shadow-xl hover:shadow-2xl flex flex-col justify-around">
                <div className="h-[30rem] w-full relative">
                  <Image
                    src={product.img}
                    fill
                    alt=""
                    className="object-center"
                  />
                </div>
                <div className="flex flex-col justify-between gap-1 lg:gap-4 text-md md:text-3xl p-2 lg:p-5 ">
                  <h2 className="font-normal">{product.title}</h2>
                  <div className="flex justify-between items-center font-semibold">
                    <h2 className="text-orange-600 text-sm md:text-3xl">
                      {product.price}
                    </h2>
                    <btn className=" bg-green-600 px-2 py-1 lg:px-4 rounded-full text-white drop-shadow-xl">
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
