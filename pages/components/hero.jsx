import Image from "next/image"

export default function Hero(){
    return(
        <div className="h-screen flex gap-24 pl-6 text-black">
                <div className="flex flex-col gap-6 mt-10">
                    <h1 className="font-bold text-6xl md:text-8xl">
                        Revelações de fotos
                    </h1>
                    <h2 className="text-xl font-medium">
                        Trabalhamos com revelações de fotos, indo dos tamanhos 9x12cm até 76x200cm
                    </h2>
                </div>
                
                
        </div>
    )
}