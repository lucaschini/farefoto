import Header from "@/components/Header";
import products from "../api/products";

import { useRouter } from 'next/router'
import Image from 'next/image';

export default function ProdutcInfo() {
    const { query } = useRouter()

    const returnedProduct = products
        .filter((product) => product.id == query.id)
    const returnedObj = returnedProduct[0]

    return (
        <>
            <Header />
            {console.log(returnedObj)}
            <Image src={returnedObj.img} width={100} height={100}/>
            <p>{returnedObj.title}</p>
            <p>{returnedObj.content}</p>
        </>
    )
}