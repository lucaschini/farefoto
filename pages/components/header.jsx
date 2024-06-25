import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center gap-6 xl:gap-32 p-10 font-semibold text-base lg:text-xl bg-gradient-to-r from-orange-400 to-rose-400">
      <Link href="/">
        <Image src="/logo.png" width={234} height={92} alt="Fare Foto"/>
      </Link>
      <Link href="/catalogo">Catálogo</Link>
      <Link href="/contato">Contato</Link>
    </div>
  );
}
