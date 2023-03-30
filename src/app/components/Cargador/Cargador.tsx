"use client";
import { Center, Html } from "@react-three/drei";
import React from "react";

function Cargador() {
  return (
    <Center>
      <Html>
        <div id="contenedor">
          <div className="contenedor-loader">
            <div className="rueda"></div>
          </div>
          <div className="cargando">Cargando...</div>
        </div>
      </Html>
    </Center>
  );
}

export default Cargador;
