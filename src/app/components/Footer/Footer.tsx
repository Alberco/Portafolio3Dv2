import { GitHub, LinkedIn, WhatsApp } from "../Icons";

function Footer() {
  return (
    <footer className="bg-gray-900 border-t-2 border-white/10">
      <div className="container mx-auto px-10 sm:px-12 lg:px-14  grid gap-4 lg:gap-0 grid-cols-1 lg:grid-cols-3 bg-gray-900 place-content-center py-8">
        <ul className="flex text-white justify-center lg:justify-start items-center gap-2">
          <li>Guillermo Alberco.C</li>
        </ul>
        <ul className="flex gap-4 text-white font-bold  items-center justify-center ">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#user">Sobre mi</a>
          </li>
          <li>
            <a href="#proyectos" rel="noopener noreferrer">
              Proyectos
            </a>
          </li>
        </ul>
        <ul className="flex gap-4 justify-center lg:justify-end items-center w-auto fill-white">
          <li className="w-6">
            <a
              href="https://github.com/Alberco"
              target="_blank"
              rel="adidas"
              className="fill-white"
            >
              <GitHub />
            </a>
          </li>
          <li className="w-6">
            <a
              href="https://www.linkedin.com/in/guillermo-alberco-capistrano-43909b156/"
              target="_blank"
              rel="adidas"
              className="fill-white"
            >
              <LinkedIn />
            </a>
          </li>
          <li className="w-6">
            <a
              href="https://github.com/Alberco"
              target="_blank"
              rel="adidas"
              className="fill-white"
            >
              <WhatsApp />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
