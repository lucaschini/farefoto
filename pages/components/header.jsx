import Image  from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center items-center min-h-[92px] gap-6 xl:gap-32 p-10 font-semibold text-xl">
      <Link href="/catalogo">Catálogo</Link>
      <Image src='/Logo.png' width={234} height={92}/>
      <Link href="/contato">Contato</Link>
    </div>
  );
}
