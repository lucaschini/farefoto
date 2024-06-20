export default function Loc() {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center gap-8 pt-10 pb-5 bg-black rounded-t-[2.5rem]">
        <h1 className="text-4xl sm:text-6xl font-bold">Nossa Localização</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.444634790235!2d-46.88614542284793!3d-23.190461248074232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf27014eaddef1%3A0xfcdd7a9d7997665f!2sFare%20Foto!5e0!3m2!1spt-BR!2sbr!4v1717522329755!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-[80%]"
        ></iframe>
        <p> Rua do Rosário, 68 - Centro, Jundiaí</p>
      </div>
    </div>
  );
}
