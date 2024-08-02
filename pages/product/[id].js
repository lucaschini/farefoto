import Footer from "@/components/Footer";
import Header from "@/components/Header";


async function getProduct(id){
    const data = await prisma.product.findUnique({
        where: {
          id: id,
        },
      })
    return data
}

export default async function Product({params}) {
    const product = await getProduct(params.id)
  return (
    <>
      <Header />
      <p>{product.name}</p>
      <Footer />
    </>
  );
}
