import Link from "next/link";   

export default function Sections() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 place-items-stretch gap-10 my-6">
        <div className="flex justify-center items-center h-[500px] bg-orange-400 md:rounded-tr-[100px] md:rounded-br-[100px]">
          1
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl font-bold text-center">Revelações Fotográficas</h1>
          <p className="w-3/4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            neque voluptatum vero quidem quae a totam at officiis inventore
            doloribus tenetur consequuntur nisi, repellendus, quibusdam culpa
            dolores, delectus autem excepturi?
          </p>
          <Link href="/">
            <button className="px-6 py-4 shadow-xl bg-orange-400 text-white font-bold rounded-lg text-xl w-fit">
              Revelar fotos
            </button>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl font-bold text-center">Revelações Fotográficas</h1>
          <p className="w-3/4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            neque voluptatum vero quidem quae a totam at officiis inventore
            doloribus tenetur consequuntur nisi, repellendus, quibusdam culpa
            dolores, delectus autem excepturi?
          </p>
          <Link href="/">
            <button className="px-6 py-4 shadow-xl bg-orange-400 text-white font-bold rounded-lg text-xl w-fit">
              Revelar fotos
            </button>
          </Link>
        </div>
        <div className="flex justify-center items-center h-[500px] bg-orange-400 md:rounded-tl-[100px] md:rounded-bl-[100px]">
          4
        </div>
        <div className="flex justify-center items-center h-[500px] bg-orange-400 md:rounded-tr-[100px] md:rounded-br-[100px]">
          5
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-5xl font-bold text-center">Revelações Fotográficas</h1>
          <p className="w-3/4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            neque voluptatum vero quidem quae a totam at officiis inventore
            doloribus tenetur consequuntur nisi, repellendus, quibusdam culpa
            dolores, delectus autem excepturi?
          </p>
          <Link href="/">
            <button className="px-6 py-4 shadow-xl bg-orange-400 text-white font-bold rounded-lg text-xl w-fit">
              Revelar fotos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
