import React from "react";
import Image from 'next/image';
import { CampanhaProps, FichaTecnicaProps } from "../../types/types";
import FichaTecnica from "../FichaTecnica/FichaTecnica";
import {  FichaPolitintasComponent } from "../../constants/FichaTecnica";
import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});


import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';

const theme = extendTheme({ breakpoints })
export default function CampanhaTitulo ({texto ,titulo, ficha}: CampanhaProps) {
  return (
   

        

<Flex
bg={useColorModeValue("#F9FAFB", "gray.600")}
p={50}
w="full"
alignItems="center"
justifyContent="center"
>
<Box
  bg={useColorModeValue("white", "gray.800")}
  mx={{ lg: 8 }}
  display={{ lg: "flex" }}
  maxW={{ lg: "5xl" }}
  shadow={{ lg: "lg" }}
  rounded={{ lg: "lg" }}
>

{/*
<Box width={{ base: "100%", sm: "50%", md: "25%" }} w={{ lg: "50%" }}  >
*/}

  <Box w={{ lg: "50%" }}>
    <Box
   
      h={{ base: 64, lg: "full" }}
      rounded={{ lg: "lg" }}
      bgSize="cover"
      >



      <chakra.h2 padding="4"
       fontSize={{ base: "2xl", md: "3xl" }}
       color={useColorModeValue("gray.800", "white")}
       fontWeight="bold"
          >

       {titulo}

     </chakra.h2>
    
    


      <Box padding="4" >
           {texto}
         
    </Box>


    
      </Box>
  </Box>


  <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
   
       

  <Center>
      <Box
        maxW={'auto'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'1px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
         
        </Box>

        <Stack>

        <Text
            color={'green.500'} 
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Ficha Técnica
          </Text>

                <Text color={'gray.500'}>
                Agência: Artcom
                </Text>

         

               
               
                
                

              
           {ficha.map((employee, index) => (
                <FichaTecnica
                name={employee.name}
                role={employee.role}
                ></FichaTecnica>
            ))}
        
        </Stack>


      </Box>
</Center>

    {/*<QuadroTexto />*/}










  </Box>
</Box>
</Flex>


       







  );
}