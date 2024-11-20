import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";


export default function Produto({ product }) {
  return (
    <>
      <Header />
      <div className="md:h-screen flex flex-col items-center md:items-start text-left  md:ml-48 gap-7 md:gap-20 mt-10 pb-4">
        <Link href='/catalogo' className="relative text-orange-400">Voltar</Link>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="h-[370px] w-[370px] md:h-[35rem] md:w-[35rem] relative">
            <Image
              src={product.imageUrl}
              fill
              alt="Imagem do Produto"
              className="object-center rounded-lg"
            />
          </div>
          <div className="flex flex-col md:h-[35rem] md:w-1/4 gap-3 md:gap-7 mt-10">
            <div className="flex flex-col w-fit gap-5">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <h2 className="text-3xl font-bold text-green-600">
                <i className="text-base not-italic text-black font-normal">Por: </i> R$ {product.price}
              </h2>
              <a href={product.linkWhatsapp} target="_blank" className="px-5 py-4 text-white bg-orange-400 font-semibold rounded-lg text-xl w-fit flex gap md:mt-10">
                Fazer pedido<Image src="/zap.png" width={30} height={30} alt="Imagem do Produto"/>
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 mx-10">
          <p className="text-xl">Informações sobre o produto:</p>
          <p className="mt-2  text-justify">
            {product.description}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const productsIds = await prisma.product.findMany({
    select: {id: true},
  });

  return {
    paths: productsIds.map((product) => ({
      params: { id: product.id.toString() },
    })),
    fallback: 'blocking', // false or "blocking"
  };
}

export async function getStaticProps({ params: { id } }) {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return {
    props: {
      product,
    },
  };
}
