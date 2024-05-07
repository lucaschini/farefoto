import Image from "next/image"
import Card  from "./Card"
export default function Oferta(){
    return(
        <div className="flex flex-col gap-12 bg-white p-10">
            <h1 className="font-bold text-4xl text-black">Produtos em oferta</h1>
            <div className="w-full h-52 bg-amber-400 rounded-2xl flex justify-center items-center shadow-lg">
                <h1 className="text-4xl">Produtos em oferta</h1>
            </div>
            <div className="flex w-full justify-between items-center">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}