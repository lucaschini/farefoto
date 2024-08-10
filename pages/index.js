import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loc from "@/components/Loc";
import HeroPais from "@/components/HeroPais";
import Sections from "@/components/Sections";
import EmblaCarousel from './components/EmblaCarousel';
import { prisma } from "./lib/prisma";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home({ products }) {
  return (
    <>
      <Header />
      <HeroPais />
      <EmblaCarousel products={products} options={OPTIONS}></EmblaCarousel>
      <Sections />
      <Loc />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const products = await prisma.Product.findMany();

  return { props: { products } };
};
