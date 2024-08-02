import Header from "@/components/Header";
import Card from "@/components/Card";
import Image from "next/image";

import { useState } from "react";
import { prisma } from "./lib/prisma";


export default function Catalogo({ products }) {
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [busca, setBusca] = useState("");

  // const arr = products;
  // const buscaLower = busca.toLowerCase();

  // const buscaFiltrada = arr
  //   .filter((product) => product.category.includes(selectedCategory))
  //   .filter((product) => product.title.includes(buscaLower));

  return (
    <div>
      <Header />
      <div className=" flex flex-col md:flex-row justify-around pt-10 pb-10">
        {/* <div>
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
        </div> */}
        <div className=" grid grid-cols-2 lg:grid-flow-row 2xl:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await prisma.Product.findMany();

  return { props: { products } };
};
