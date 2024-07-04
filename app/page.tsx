import Photo from "@/components/Photo";

import { FaWpforms } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      {/* texto */}
      <div className="text-center xl:text-left order-2 xl:order-none">
        <span className="text-xl">IDW 24.1</span>
        <h1 className="h1 mb-6">
          I Webinário<br/> <span className="text-accent">Sobre Dados</span>
        </h1>
        <p className="max-w-[500px] mb-9 text-white/80"> 
        Um webinário é uma webconferência ou videoconferência com intuito educacional, 
        no qual a comunicação é de apenas uma via, ou seja, somente o palestrante se expressa e as outras assistem, 
        onde a interação dos ...
        </p>
        {/* botão e redes Rede */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <a className="uppercase flex items-center gap-2 border border-accent rounded-full px-4 py-2 hover:bg-accent hover:text-primary transition-all duration-500">
          <span>Inscreva-se</span>
          <FaWpforms className="text-xl" />
          </a>
          <div className="mb-8 xl:mb-0">
          </div>
        </div>
      </div>
      {/* foto */}
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
      </div>
      </div>
    </section>
  );
}
export default Home;