import Photo from "@/components/Photo";
import { FaWpforms } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              I WorkShop <br /> <span className="text-accent">de Engenharia de dados</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Evento organizado pelos alunos da disciplina{" "}
              <span className="text-dark-gray">Integração de Dados: Web e Warehousing</span>, oferecida pelo Centro de Informática da Universidade Federal de Pernambuco (UFPE). 
              Este workshop tem como objetivo proporcionar uma plataforma para a apresentação e discussão de diversos temas relevantes na área de engenharia de dados.
              Durante o evento, serão realizados seminários conduzidos pelos próprios alunos, que apresentarão trabalhos e projetos desenvolvidos ao longo do curso. 
              Os temas abordados nos seminários são variados, refletindo a amplitude e a diversidade do campo da engenharia de dados.
            </p>
            {/* botão e redes Rede */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/inscricao" className="uppercase flex items-center gap-2 border border-accent rounded-full px-4 py-2 hover:bg-accent transition-all duration-500">
              <span>Inscreva-se</span>
              <FaWpforms className="text-xl" />
            </a>
              <div className="mb-8 xl:mb-0"></div>
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
};

export default Home;
