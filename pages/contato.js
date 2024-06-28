import Header from "@/components/Header";

export default function Contato() {
  return (
    <>
      <Header/>
      <div className="h-[80vh] flex flex-col items-center justify-center mt-10">
        <div className="w-[90%] lg:max-w-[70%] bg-white text-black rounded-xl p-6 lg:py-10 m-4 flex flex-col justify-center items-center gap-6 lg:gap-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-center">
            Horário de funcionamento:
          </h2>
          <p className="text-xl lg:text-2xl text-center">Segunda a Sexta das 9h às 18h<br/>Sábado das 9h às 13h</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-center">
            Atendimento ao cliente:
          </h2>
          <div className="flex flex-col lg:flex-row gap-3 items-center justify-center text-lg lg:text-2xl">
            <p>Whatsapp - (11) 95314-7703</p>
            <a href="https://wa.me/+5511953147703/?text=Olá">
              <btn className='px-4 py-3 bg-orange-400 rounded-lg font-semibold text-white flex items-center justify-center'>📞 Envie uma mensagem!</btn>
            </a>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 items-center justify-center text-lg lg:text-2xl">
            <p>Whatsapp - (11) 94327-8453</p>
            <a href="https://wa.me/+55119432784533/?text=Olá">
              <btn className='px-4 py-3 bg-orange-400 rounded-lg font-semibold text-white flex items-center justify-center'>📞 Envie uma mensagem!</btn>
            </a>
          </div>
          <h2 className="text-xl lg:text-2xl text-center">Email: farefoto1@gmail.com</h2>
        </div>
      </div>
    </>
  );
}
