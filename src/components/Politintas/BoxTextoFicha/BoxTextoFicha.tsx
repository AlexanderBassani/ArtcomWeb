import React from "react";
import { chakra, Box, Stack, Text, Center, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import QuadroTexto from "../QuadroTexto/QuadroTexto";
import FichaTecnica from "../../FichaTecnica/FichaTecnica";
import CampanhaTitulo from "../../CampanhaTitulo/CampanhaTitulo";

import {  FichaPolitintasComponent } from "../../../constants/FichaTecnica";
import {  CampanhaPolitintasComponent } from "../../../constants/FichaTecnica";

export default function App(){
  return (



  <Flex>

        {CampanhaPolitintasComponent.map((campanha, index) => (
              <CampanhaTitulo
            titulo={campanha.titulo}
              texto={campanha.texto}
              ficha={campanha.ficha}
              ></CampanhaTitulo>
          ))}

    
</Flex>






  
  
  
  
  
  
  
  




);
};

