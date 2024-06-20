import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <Link href='/produto/1'>
      <div className="sm:h-[630px] sm:w-[500px] w-[90%] bg-white text-black shadow-xl hover:shadow-2xl flex flex-col justify-between">
        <Image src={props.arr.img} width={500} height={500} />
        <div className="flex justify-between text-xl sm:text-3xl font-semibold pb-7 px-6">
          <div className="flex flex-col gap-2">
            <h2>{props.arr.title}</h2>
            <p className="text- ">Veja mais</p>
          </div>
          <h2>{props.arr.price}</h2>
        </div>
      </div>
    </Link>
  );
}
