import Header from "./components/Header";
import Card from "./components/Card";

import products from "./api/products";

export default function Catalogo() {
    return (
        <div className="bg-[#1D1D1D]">
            <Header />
            <h1>Ola</h1>
            {products.map((product) => (
          <Card key={product.id} arr={product} />
        ))}
        </div>
    )
}