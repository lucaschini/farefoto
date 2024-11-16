import Link from "next/link";
import Image from "next/image";

export default function Sections() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 place-items-stretch gap-10 my-6">
        <div className="flex justify-center items-center h-[500px] bg-orange-400 md:rounded-tr-[100px] md:rounded-br-[100px]">
          <div className="md:w-[400px] md:h-[400px] w-[300px] h-[300px]rounded-full">
            <Image
              src="/fotos_reveladas.jpeg"
              width={400}
              height={400}
              layout="responsive"
              alt="Dia dos pais"
              className="aspect-square rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl font-bold text-center">
            Revelações Fotográficas
          </h1>
          <p className="w-3/4 text-center">
            Transforme suas memórias em algo tangível com a nossa revelação de
            fotos. Oferecemos qualidade profissional e acabamentos impecáveis
            para que cada imagem se destaque. Reviva seus momentos favoritos com
            impressões que capturam cada detalhe!
          </p>
          <Link href="/catalogo">
            <button className="px-6 py-4 shadow-xl bg-orange-400 text-white font-bold rounded-lg text-xl w-fit">
              Revelar fotos
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl font-bold text-center">Fotoprodutos</h1>
          <p className="w-3/4 text-center">
            Personalize seus momentos com nossos fotoprodutos exclusivos! De
            álbuns a objetos decorativos, criamos peças únicas que transformam
            suas fotos em lembranças inesquecíveis.
          </p>
          <Link href="/catalogo">
            <button className="px-6 py-4 shadow-xl bg-orange-400 text-white font-bold rounded-lg text-xl w-fit">
              Conferir produtos
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center h-[500px] bg-orange-400 md:rounded-tl-[100px] md:rounded-bl-[100px]">
        <div className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full">
            <Image
              src="/catalogo_fotos/caneca_polimero.jpg"
              width={400}
              height={400}
              layout="responsive"
              alt="Dia dos pais"
              className="aspect-square rounded-2xl"
            />
          </div>
        </div>
        <div className="flex justify-center items-center h-[500px] bg-orange-400 md:rounded-tr-[100px] md:rounded-br-[100px]">
          <div className="md:w-[500px] md:h-[500px]">
            <Image
              src="/polaroid_ilustracao.png"
              width={400}
              height={400}
              layout="responsive"
              alt="Dia dos pais"
              className="aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl font-bold text-center">Polaroids</h1>
          <p className="w-3/4 text-center">
            Leve o charme das fotos instantâneas para a sua casa com nossas
            polaroids personalizadas. Compactas e cheias de estilo, elas são
            perfeitas para decorar, presentear ou guardar suas melhores
            memórias.
          </p>
          <Link href="/">
            <button className="px-6 py-4 shadow-xl bg-orange-400 text-white font-bold rounded-lg text-xl w-fit">
              Revelar polaroids
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
