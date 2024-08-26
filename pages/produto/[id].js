import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { prisma } from "@/pages/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default function Produto({ product }) {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-col items-center md:items-start text-left  md:ml-48 gap-7 md:gap-20 mt-10">
        <Link href='/catalogo' className="relative text-orange-400">Voltar</Link>
        <div className="flex flex-row">
          <div className="h-[370px] w-[370px] md:h-[35rem] md:w-[35rem] relative">
            <Image
              src={product.imageUrl}
              fill
              alt="Imagem do Produto"
              className="object-center rounded-lg"
            />
          </div>
          <div className="flex flex-col w-[370px] md:h-[35rem] md:w-1/4 gap-3 md:gap-7 md:justify-around">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <h2 className="text-3xl font-bold text-green-600">
                R$ {product.price}
              </h2>
              <button className="px-4 py-3 text-white bg-orange-400 font-semibold rounded-lg text-xl w-full">
                Fazer pedido
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <p className="text-xl">Informações sobre o produto:</p>
          <p className="text-xl text-wrap">
            {product.description}Adicione um toque de cor e personalidade à sua
            rotina com a nossa elegante Caneca Azul Vibrante. Ideal para começar
            o dia com energia ou para um momento relaxante durante o trabalho,
            esta caneca combina praticidade e charme. Características: Design
            Atraente: A caneca apresenta um cabo azul e um interior azul que
            adicionam um toque de sofisticação e estilo. Material de Alta
            Qualidade: Feita em cerâmica resistente, ideal para manter suas
            bebidas quentes ou frias por mais tempo. Tamanho Ideal: Com
            capacidade generosa, é perfeita para café, chá, chocolate quente ou
            qualquer bebida de sua escolha. Fácil de Limpar: A superfície lisa
            facilita a limpeza, tanto à mão quanto em máquina de lavar louça.
            Seja para um presente especial ou para enriquecer sua coleção
            pessoal, a Caneca Azul Vibrante é a escolha perfeita para quem
            valoriza elegância e funcionalidade. Adicione um pouco de cor ao seu
            dia a dia!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const productsIds = await prisma.product.findMany();
  return {
    paths: productsIds.map((id) => ({
      params: { id: id.toString() },
    })),
    fallback: true, // false or "blocking"
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
