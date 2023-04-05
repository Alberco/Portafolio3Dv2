import Image from "next/image";
import logo from "../../../../public/logo2.png";
import { HomeIcon, UserIcon, ProyectIcon } from "../Icons";

function NavbarPC() {
  return (
    <nav className="fixed top-0 z-50 inset-x-0 w-full bg-gray-900 border-b-2 border-white/10" style={{scrollBehavior:"smooth"}} >
      <div className="container mx-auto flex items-center justify-between py-6">
        <ul className="mx-4 text-white flex gap-1 lg:gap-3 font-bold text-md lg:text-xl items-center">
          <li>
            <Image
              src={logo}
              width={20}
              height={20}
              alt="logo de portafolio personal"
            />
          </li>
          <li>Hyde</li>
        </ul>
        <ul className="text-white lg:flex gap-4 font-bold text-sm lg:text-lg items-center hidden">
          <li className="flex justify-center items-center gap-1">
            <span>
              <HomeIcon />
            </span>
            <a href="#inicio">Inicio</a>
          </li>
          <li className="flex justify-center items-center gap-1">
            <span>
              <UserIcon />
            </span>
            <a href="#user">
              Sobre mi
            </a>
          </li>
          <li className="flex justify-center items-center gap-1">
            <span>
              <ProyectIcon />
            </span>
            <a href="#proyectos" rel="noopener noreferrer">Proyectos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarPC;
