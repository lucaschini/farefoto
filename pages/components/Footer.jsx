import Image from 'next/image';
import Link from 'next/link';

export default function Footer(){
    return(
        <div className="h-60 bg-mainBlack flex flex-col md:flex-row items-center justify-evenly">
            <Image src='/logo.png'  width={300} height={150}/>
            <div className='flex flex-col gap-5'>
                <p>Links</p>
                <Link href='/catalogo' className='text-slate-500 hover:text-mainWhite'>Cátalogo</Link>
                <Link href='/contato' className='text-slate-500 hover:text-mainWhite'>Contato</Link>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Horário de funcionamento:</p>
                <p>Segunda a Sexta: 09h - 18h</p>
                <p>Sábado: 09h - 13h</p>
            </div>
            
        </div>
    )
}