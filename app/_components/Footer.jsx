import { RiFacebookFill, RiInstagramLine } from "@remixicon/react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto py-6 px-36 grid grid-cols-4 gap-12">
        <div className="col-span-2">
          <h4 className="text-3xl font-black mb-2">
            FOOT<span className="text-green-400">GOAL</span>
          </h4>
          <p className="text-lg font-medium">Footgoal fue creado con el objetivo de entretener a la comunidad futbolera en latinoamerica.</p>
        </div>
        <div>
          <div className="mb-4">
            <h4 className="text-2xl font-bold mb-2">
              Acceso Rápido
            </h4>
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#45F882] from-40% to-[#FFBE18] to-100%"></div>
          </div>
          <nav>
            <ul className="space-y-1 text-lg font-medium">
              <li>
                <a href="#" className="hover:text-[#45F882] transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#45F882] transition-colors">About us</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#45F882] transition-colors">Games</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#45F882] transition-colors">Leaderboard</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
        <div className="mb-4">
          <h4 className="text-2xl font-bold mb-2">
              Redes sociales
            </h4>
            <div className="w-28 h-0.5 bg-gradient-to-r from-[#45F882] from-40% to-[#FFBE18] to-100%"></div>
          </div>
          <div className="flex flex-row gap-4">
            <a href="#" className="bg-[#0F1C23] hover:bg-white transition-colors rounded-full p-2">
              <RiFacebookFill
                size={24}
                color="#1877F2"
              />
            </a>
            <a href="#" className="bg-[#0F1C23] hover:bg-white transition-colors rounded-full p-2">
              <RiInstagramLine
                size={24}
                color="#C13584"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#0F1C23] py-4 text-center">
        <p className="text-lg font-medium">
          Desarrollado por
          <a
            href="https://www.linkedin.com/in/romariosarmiento/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#45F882] hover:text-[#FFBE18] transition-colors"
          > Romario Sarmiento</a>
        </p>
      </div>
    </footer>
  );
}
  