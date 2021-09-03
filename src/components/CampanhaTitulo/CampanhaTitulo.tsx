import React from "react";
import Image from 'next/image';
import { CampanhaProps, FichaTecnicaProps } from "../../types/types";
import FichaTecnica from "../FichaTecnica/FichaTecnica";
/*import {  FichaPolitintasComponent } from "../../constants/FichaTecnica"; */
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
  Link,
  Flex,
  Center,
  Heading,
  Img,
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
  mx={{ lg: 2 }}
  display={{ lg: "flex" }}
  maxW={{ lg: "5xl" }}
  shadow={{ lg: "lg" }}
  rounded={{ lg: "lg" }}
>

{/*
<Box width={{ base: "100%", sm: "50%", md: "25%" }} w={{ lg: "50%" }}  >
*/}

                <Box p={4} width={{ base: "100%", sm: "90%", md: "45%" }}  display={{ md: "flex" }}>
                  <Box flexShrink={0}>
                  </Box>
                  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Text
                      fontWeight="bold"
                      fontSize="lg"
                      textTransform="uppercase"
                      letterSpacing="wide"
                      color="teal.600"
                    >
                      {titulo}
                    </Text>
                  
                    <Text mt={2} color="gray.500">
                    {texto}
                    </Text>
                  </Box>
                </Box>



  <Box py={12} px={2} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
   
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