import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loc from "@/components/Loc";
import Hero from "@/components/Hero";
import Sections from "@/components/Sections";
import EmblaCarousel from '@/carrousel/EmblaCarousel';

import { prisma } from "@/lib/prisma";

export default function Home({ products }) {
  return (
    <>
      <Header/>
      <Hero />
      <h1 className="h-9 text-4xl font-bold pl-4 py-10">Produtos Populares 🔥</h1>
      <EmblaCarousel products={products}></EmblaCarousel>
      <Sections />
      <Loc />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const products = await prisma.product.findMany();

  return { props: { products } };
};
