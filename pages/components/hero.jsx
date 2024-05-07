import Image from "next/image"

export default function Hero(){
    return(
        <div className="h-screen flex flex-col gap-24  pl-6 items-center justify-center">
                <h1 className="font-bold text-8xl">
                    Revelações de fotos
                </h1>
                <h2>
                    Trabalhamos com revelações de fotos, indo dos tamanhos 9x12cm até 76x200cm
                </h2>
        </div>
    )
}