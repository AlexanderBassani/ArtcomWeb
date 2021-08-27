import React from "react";
import { chakra, Box, Stack, Text, Center, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import CampanhaTitulo from "../../CampanhaTitulo/CampanhaTitulo";
import {  CampanhaMedComponent } from "../../../constants/FichaTecnica";

export default function BoxTextoFicha(){
  return (



  <Flex>

        {CampanhaMedComponent.map((campanha, index) => (
              <CampanhaTitulo
            titulo={campanha.titulo}
              texto={campanha.texto}
              ficha={campanha.ficha}
              ></CampanhaTitulo>
          ))}

    
</Flex>






  
  
  
  
  
  
  
  




);
};

