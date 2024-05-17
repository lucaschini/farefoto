import Image  from 'next/image';

export default function Card(){
    return(
        <div className="sm:h-[630px] sm:w-[500px] w-[90%] bg-white text-black shadow-2xl flex flex-col justify-between">
            <Image src="/foto-card.jpeg" width={500} height={500}/>
            <div className='flex justify-between text-xl sm:text-3xl font-semibold pb-7 px-6'>
                <h2>Polaroid</h2>
                <h2>R$ 2,50</h2>
            </div>
        </div>
    )
}