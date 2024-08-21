import Header from "@/components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { prisma } from "./lib/prisma";


export default function Catalogo({ products }) {
  return (
    <div>
      <Header />
      <Search products={products} />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await prisma.Product.findMany();

  return { props: { products } };
};