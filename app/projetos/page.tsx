"use client";

import {motion} from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsProjector } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import warehouse from "@/public/assets/warehouse.png";
import redis from "@/public/assets/redis.png";


const projects= [
    {
        num: "1",
        category: "Seminario 1",
        title: "Datawarehousing",
        description: "Armazém de dados, ou ainda depósito de dados, é utilizado para armazenar informações relativas às atividades de uma organização em bancos de dados, de forma consolidada.",
        stack: [{name: "gerenciamento de dados"}, {name: "Arquitetura de Data Warehouse"}],
        image: warehouse.src,
        live: "",
        Slide: ""
    },
    {
        num: "2",
        category: "Seminario 2",
        title: "Banco de dados chave valor usando redis",
        description: "O Redis armazena dados como pares chave-valor, em que cada entrada de dados possui uma chave exclusiva. Ele é compatível com diversos tipos de dados, como conjuntos classificados, hashes, conjuntos, listas e strings. As chaves podem ter qualquer tamanho até um total de 512 MB.",
        stack: [{name: "Python"}, {name: "Banco de dados"}, {name: "Redis"}],
        image: redis.src,
        live: "",
        Slide: "",
    },



]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (Swiper: any) => {
        // obtem o índice atual do slide
        const currentIndex= Swiper.realIndex;

        // atualiza o estado do projeto com base no índice
        setProject(projects[currentIndex]);
    }
    return (
            <motion.section
                className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
            >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            {/* descrition */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                    return( 
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/* remove the last commo*/}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                
                                );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons*/}
                            <div className="flex items-center gap-4">
                                {/* live button */}
                                <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Projects</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                                {/* github project button */}
                                <Link href={project.Slide}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsProjector className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Slide</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    // TODO: loop infinito 
                    loop={true}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index) => {
                            return (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/* overloy */}
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    {/* image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                        src={project.image}
                                        fill 
                                        className="object-cover"
                                        alt=""
                                        />
                                    </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        <WorkSliderBtns 
                            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] sm:bottom-0 z-20 w-full justify-between sm:w-max sm:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all"
                            iconsStyle=""
                        />
                    </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )

}
export default Work;