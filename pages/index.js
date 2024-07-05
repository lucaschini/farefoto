import Header from "@/components/Header";
import { productsOferta, maisVendidos } from "@/api/productsOferta";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center relative text-black bg-white">
        <div className="h-full z-0">
          <Image
            src="/background-hero.jpeg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="z-10 h-full bg-gradient-to-b from-orange-400 via-transparent absolute top-0 left-0 inset-0"></div>
        <div className="absolute top-20 2xl:top-80 lg:left-14 flex flex-col items-center gap-6 z-20 bg-white lg:max-w-[50%] max-w-[80%] p-9 rounded-2xl ">
          <h1 className="font-extrabold text-3xl lg:text-6xl ">
            Reviva Seus Melhores Momentos
          </h1>
          <p className="lg:text-lg font-medium">
            Na Fare Foto, transformamos suas fotos digitais em memórias
            tangíveis. <br />
            Oferecemos serviços de revelação de alta qualidade para que você
            possa reviver e compartilhar suas histórias mais preciosas. Explore
            nossa variedade de produtos fotográficos e descubra como dar vida às
            suas lembranças. <br />
            <br /> Revele suas fotos com a gente hoje mesmo!📸
          </p>
          <Link
            href="/catalogo"
            className="bg-orange-400 p-5 w-64 rounded-lg text-white flex justify-center items-center font-semibold"
          >
            Confira nossos produtos
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-12 bg-white p-10">
        <div className="w-full h-52 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 rounded-2xl flex justify-center items-center shadow-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Produtos mais vendidos!
          </h1>
        </div>

        <div className="flex flex-col gap-10 xl:flex-row w-full justify-between items-center">
          {maisVendidos.map((product) => (
            <a
              href={`${product.link} ${product.title}`}
              key={product.id}
              target="_blank"
            >
              <div className="max-w-[500px] max-h-[579px] bg-white text-black shadow-xl hover:shadow-2xl flex flex-col justify-between">
                <Image src={product.img} width={400} height={379} alt="" />
                <div className="flex flex-col justify-between gap-1 lg:gap-4 text-md md:text-2xl p-2 lg:p-5 ">
                  <h2 className="font-normal">{product.title}</h2>
                  <div className="flex justify-between items-center font-semibold">
                    <h2 className="text-orange-600">{product.price}</h2>
                    <btn className=" bg-green-600 p-2 lg:px-4 rounded-full text-white drop-shadow-xl">
                      Comprar
                    </btn>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="w-full h-52 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500 rounded-2xl flex justify-center items-center shadow-lg hover:shadow-xl">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Pacotes promocionais!
          </h1>
        </div>
        <div className="flex flex-col gap-10 xl:flex-row w-full justify-between items-center">
          {productsOferta.map((product) => (
            <a
              href={`${product.link} ${product.title}`}
              key={product.id}
              target="_blank"
            >
              <div className="max-w-[500px] max-h-[579px] bg-white text-black shadow-xl hover:shadow-2xl flex flex-col justify-between">
                <Image src={product.img} width={400} height={379} alt="" />
                <div className="flex flex-col justify-between gap-1 lg:gap-4 text-md md:text-2xl p-2 lg:p-5 ">
                  <h2 className="font-normal">{product.title}</h2>
                  <div className="flex justify-between items-center font-semibold">
                    <h2 className="text-orange-600">{product.price}</h2>
                    <btn className=" bg-green-600 p-2 lg:px-4 rounded-full text-white drop-shadow-xl">
                      Comprar
                    </btn>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-8 pt-10 pb-5">
        <h1 className="text-4xl sm:text-6xl font-bold">Nossa Localização</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.444634790235!2d-46.88614542284793!3d-23.190461248074232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf27014eaddef1%3A0xfcdd7a9d7997665f!2sFare%20Foto!5e0!3m2!1spt-BR!2sbr!4v1717522329755!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-[80%]"
        ></iframe>
        <p> Rua do Rosário, 68 - Centro, Jundiaí</p>
      </div>
    </>
  );
}
