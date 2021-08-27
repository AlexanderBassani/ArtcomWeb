import React from "react";
import { chakra, Box, Stack, Text, Center, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import QuadroTexto from "../QuadroTexto/QuadroTexto";
import CampanhaTitulo from "../../CampanhaTitulo/CampanhaTitulo";

import {  FichaCariacicaComponent } from "../../../constants/FichaTecnica";
import {  CampanhaCariacicaComponent } from "../../../constants/FichaTecnica";

export default function App(){
  return (
  <Flex>
        {CampanhaCariacicaComponent.map((campanha, index) => (
              <CampanhaTitulo
            titulo={campanha.titulo}
              texto={campanha.texto}
              ficha={campanha.ficha}
              ></CampanhaTitulo>
          ))}

    
</Flex>






  
  
  
  
  
  
  
  




);
};

