import Image from "next/image";
import Link from "next/link";

export default function Card({ product }) {
  return (
    <Link href={`product/${product.id}`}>
      <div className="h-64 w-48 md:h-[550px] md:w-[400px] bg-white text-black shadow-xl hover:shadow-2xl flex flex-col justify-around">
        <div className="h-[30rem] w-full relative">
          <Image src={product.imageUrl} fill alt="" className="object-center" />
        </div>
        <div className="flex flex-col justify-between gap-1 lg:gap-4 text-md md:text-3xl p-2 lg:p-5 ">
          <h2 className="font-normal">{product.name}</h2>

          <h2 className="text-orange-600 text-sm md:text-3xl">
            R$ {product.price}
          </h2>
        </div>
      </div>
    </Link>
  );
}
