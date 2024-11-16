import Image from 'next/image';
import Link from 'next/link';

export default function Footer(){
    return(
        <div className="min-h-60 bg-mainBlack text-white flex flex-col gap-10 md:gap-0  md:flex-row items-center justify-center md:justify-evenly py-6 md:p-2">
            <Image src='/logo.png'  width={300} height={150} alt="logo"/>
            <div className='flex flex-col gap-5 text-center md:text-left'>
                <p>Links</p>
                <Link href='/catalogo' className='text-slate-500 hover:text-mainWhite'>Cátalogo</Link>
                <Link href='/contato' className='text-slate-500 hover:text-mainWhite'>Contato</Link>
            </div>
            <div className='flex flex-col gap-2 text-center'>
                <p>Horário de funcionamento:</p>
                <p>Segunda a Sexta: 09h - 18h</p>
                <p>Sábado: 09h - 13h</p>
            </div>

        </div>
    )
}