import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loc from "@/components/Loc";
import HeroPais from "@/components/HeroPais";
import Sections from "@/components/Sections";


export default function Home() {
  return (
    <>
      <Header />
      <HeroPais />
      <Sections />
      <Loc />
      <Footer />
    </>
  );
}
