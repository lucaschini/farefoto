import { useState } from "react";

import Card from "./Card";
import Link from "next/link";

export default function Search({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [busca, setBusca] = useState("");

  const buscaLower = busca.toLowerCase();

  const buscaFiltrada = products
    .filter((product) => product.category.includes(selectedCategory))
    .filter((product) => product.name.includes(buscaLower));

  return (
    <div className="min-h-[80vh] flex flex-col items-center pt-10 pb-10">
      <div className="w-full flex flex-col gap-4">
        <Link href="/" className="ml-10 text-orange-400 hover:underline underline-offset-3">Voltar</Link>
        
        <h1 className="pb-5 text-2xl lg:text-4xl font-semibold ml-10">
          Produtos
        </h1>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-56 mb-5">
        <label className="w-full lg:w-2/4">
          <span class="sr-only">Search</span>
          <input
            className="placeholder:text-black bg-transparent w-full border rounded-full py-2 pl-3 pr-3 shadow-sm text-sm focus:outline-none"
            placeholder="🔍"
            type="text"
            name="search"
            value={busca}
            onChange={(ev) => setBusca(ev.target.value)}
          />
        </label>
        <select
          className="h-fit bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-60 p-2.5 "
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="" defaultValue disabled hidden>
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
      </div>
      <div className=" grid grid-cols-2 lg:grid-flow-row 2xl:grid-cols-4 gap-3">
        {buscaFiltrada.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
