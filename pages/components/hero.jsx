import Image from "next/image"

export default function Hero(){
    return(
        <div className="h-screen flex gap-96  pl-6 items-center   ">
            <div className="gap-20 flex flex-col">
                <h1 className="font-bold text-8xl">
                    Revelações de fotos
                </h1>
                <h2>
                    Trabalhamos com revelações de fotos, indo dos tamanhos 9x12cm até 76x200cm
                </h2>
            </div>
        <div>
            <Image src='/Polaroid frente.png' width={100} height={100} className=""/>
            <Image src='/Polaroid trás.png' width={100} height={100} className=" -z-10"/>
        </div>
        </div>
    )
}