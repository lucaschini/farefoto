
import Image from 'next/image';
export default function Footer(){
    return(
        <div className="h-60 bg-mainBlack flex items-center justify-center">
            <Image src='/logo.png'  width={300} height={150}/>
            <div className='flex flex-col gap-5'>

            </div>
        </div>
    )
}