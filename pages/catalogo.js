import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

import products from "./api/products";

export default function Catalogo() {
    return (
        <div className="bg-[#1D1D1D]">
            <Header />
            <div className="w-full flex flex-col lg:flex-row mt-12 pb-12">
                <div className="hidden lg:flex lg:ml-9 lg:w-[10%] lg:flex-col lg:gap-2">
                    <h1 className="text-xl font-semibold">Categorias</h1>
                    <h2>Revelações</h2>
                    <h2>Revelações</h2>
                    <h2>Revelações</h2>
                    <h2>Revelações</h2>
                    <h2>Revelações</h2>
                    <h2>Revelações</h2>
                    <h1 className="text-xl font-semibold">Ofertas</h1>
                </div>
                <div className="lg:w-[90%] flex flex-col">
                    <div className="pl-5 lg:pl-0 pb-5 text-xl font-semibold">
                        <h1>Produtos</h1>
                    </div>
                    <div className="flex flex-col items-center 2xl:grid-cols-3 lg:grid lg:grid-cols-2 lg:grid-flow-row gap-6">
                        {products.map((product) => (
                            <Card key={product.id} arr={product} />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}