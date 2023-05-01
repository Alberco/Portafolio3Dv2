"use client";
import { GitHub, LinkedIn, WhatsApp } from "../Icons";
import { Heebo } from "next/font/google";
import { Canvas } from "@react-three/fiber";
import Robot from "../Robot";
import { Center, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import Cargador from "../Cargador/Cargador";

const heebo = Heebo({
  subsets: ["latin"],
  weight: "400",
});

function Hero() {
  return (
    <section id="inicio" className=" bg-gray-900 z-40 mt-10">
      <article className="mx-auto container px-10 sm:px-12 lg:px-14 grid grid-cols-1 lg:grid-cols-2  z-50 w-full min-h-screen">
        <div className="place-self-center order-2 lg:order-1 mt-8 2xl:mt-0">
          <p className="text-white text-xl lg:text-6xl font-extrabold text-start">
            Hola,
            <span className="block">Soy Guillermo Alberco Capistrano,</span>
            Web Developer
          </p>
          <p className="text-white text-md lg:text-2xl my-4 ">
            Soy un desarrollador web, me considero una persona con iniciativa a
            superar problemas,ademas me gusta aprender nuevas tecnologias y
            llevar mis proyectos al siguiente nivel.
          </p>
          <div className="w-[140px] my-6 h-auto flex gap-4 fill-white">
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
          <a href="/" download="cv">
            <button className="border-2 border-white/20 text-xl py-2 px-4 text-white flex justify-center items-center hover:bg-gray-800/80 hover:text-white transition-all duration-300">
              Descargar CV
            </button>
          </a>
        </div>
        <div className="order-1 lg:order-2">
          <Canvas>
            <Suspense fallback={<Cargador />}>
              <Center position={[0, -2, 0]}>
                <Robot scale={4} />
              </Center>
            </Suspense>
            <OrbitControls
              autoRotate={true}
              autoRotateSpeed={0.5}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 10, 10]} />
          </Canvas>
        </div>
      </article>
    </section>
  );
}

export default Hero;
