import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsOferta, maisVendidos } from "@/api/productsOferta";

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center relative text-black bg-mainWhite">
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
      <div className="flex flex-col gap-12 bg-white p-10 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-200 via-red-500 to-fuchsia-500">
        <div className="w-full rounded-2xl flex flex-col justify-center items-center p-7">
          <h1 className="text-2xl text-center sm:text-4xl font-bold mb-10 bg-mainWhite text-mainColor rounded-xl p-4 shadow-xl">
            Produtos mais vendidos!
          </h1>

          <div className="flex flex-col gap-10 xl:flex-row w-full items-center justify-evenly">
            {maisVendidos.map((product) => (
              <a
                href={`${product.link} ${product.title}`}
                key={product.id}
                target="_blank"
              >
                <div className="h-64 w-52 md:h-[550px] md:w-[400px] bg-mainWhite text-black shadow-xl hover:shadow-2xl flex flex-col justify-around">
                  <div className="h-[30rem] w-full relative">
                    <Image src={product.img} fill alt="" className="object-cover"/>
                  </div>
                  <div className="flex flex-col justify-between gap-1 lg:gap-4 text-md md:text-3xl p-2 lg:p-5 ">
                    <h2 className="font-normal">{product.title}</h2>
                    <div className="flex justify-between items-center font-semibold">
                      <h2 className="text-orange-600 text-sm md:text-3xl">
                        {product.price}
                      </h2>
                      <btn className=" bg-green-600 px-2 py-1 lg:px-4 rounded-full text-white drop-shadow-xl">
                        Comprar
                      </btn>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="w-full rounded-2xl flex flex-col justify-center items-center p-7">
          <h1 className="text-2xl text-center sm:text-4xl font-bold mb-10 bg-mainWhite text-mainColor rounded-xl p-4 shadow-xl">
            Pacotes Promocionais!
          </h1>

          <div className="flex flex-col gap-10 xl:flex-row w-full items-center justify-evenly">
            {productsOferta.map((product) => (
              <a
                href={`${product.link} ${product.title}`}
                key={product.id}
                target="_blank"
              >
                <div className="h-64 w-52 md:h-[550px] md:w-[400px] bg-mainWhite text-black shadow-xl hover:shadow-2xl flex flex-col justify-around">
                  <div className="h-[30rem] w-full relative">
                    <Image src={product.img} fill alt="" className="object-cover"/>
                  </div>
                  <div className="flex flex-col justify-between gap-1 lg:gap-4 text-md md:text-3xl p-2 lg:p-5 ">
                    <h2 className="font-normal">{product.title}</h2>
                    <div className="flex justify-between items-center font-semibold">
                      <h2 className="text-orange-600 text-sm md:text-3xl">
                        {product.price}
                      </h2>
                      <btn className=" bg-green-600 px-2 py-1 lg:px-4 rounded-full text-white drop-shadow-xl">
                        Comprar
                      </btn>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
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
      <Footer />
    </>
  );
}
