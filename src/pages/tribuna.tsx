/* eslint-disable no-sparse-arrays */
import React from "react";
import Carrousel from "../components/Carrousel/Carrousel";
import Header from "../components/Header/Header"; 
import Footer from "../components/Footer/Footer";
import BoxTextoFicha from "../components/Tribuna/BoxTextoFicha/BoxTextoFicha";
import Galeria from "../components/Tribuna/Galeria/Galeria";


import { CarrouselCampaignComponent } from "../constants/CarrouselConstants";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Stack,
  VStack,
 StackDivider,
  Link,
  Text,
  AspectRatio,
  Button,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import SEO from "../components/SEO";
import QuadroTexto from "../components/Tribuna/QuadroTexto/QuadroTexto";
export default function Tribuna() {
  return (
    <>
      <SEO title="Home | ArtCom" description="Some description" />
      <Header bg="yellow.700" />
           {/* 
      <Flex
        bg={useColorModeValue("white.700", "gray.600")}
        w="full"
        alignItems="center"
        justifyContent="center"
        p={50}
      >
       
      </Flex>
 Saiba Mais */}



      <AspectRatio maxW="100%" ratio={9 / 3}>
         <iframe
            src="https://www.youtube.com/embed/Ddsn9QXmLao"
           title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>




          
      </AspectRatio>

      
    <BoxTextoFicha />






    <Galeria />


      



      <Flex
        bg={useColorModeValue("white", "gray.600")}
        pl={51}
        pr={51}
        w="full"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          bg={useColorModeValue("white", "gray.800")}
          px={8}
          py={20}
          mx="auto"
        >
         



          
          {/* Campanha Politintas 
          <SimpleGrid
            alignItems="start"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >

            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box h="40px" bg="yellow.200">
                1
              </Box>
              <Box h="40px" bg="tomato">
                2
              </Box>
              <Box h="40px" bg="pink.100">
                3
              </Box>
            </VStack>

        


          </SimpleGrid>

  */}















     
          














         










       
        

        </Box>




      </Flex>
      {/* Saiba Mais */}



      
      <Flex
        bg={useColorModeValue("black", "gray.600")}
        w="full"
        alignItems="center"
        justifyContent="center"
        p={50}
      >
        <Box bg={useColorModeValue("black", "gray.800")}>
          <Box
            w="full"
            py={{ base: 12, sm: 14, lg: 16 }}
            px={{ base: 4, sm: 14, lg: 8 }}
            display={{ lg: "flex" }}
            alignItems={{ lg: "center" }}
            justifyContent={{ lg: "space-between" }}
          >
            <HStack spacing={{ base: 10, sm: 15, lg: 40 }}>
              <Box
                direction={{ base: "column", sm: "row" }}
                mt={{ base: 8, lg: 0 }}
                shrink={{ lg: 0 }}
              >
                <chakra.h1
                  fontSize={{ base: "lg", sm: "4xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  lineHeight="shorter"
                  color={useColorModeValue("yellow.700", "gray.100")}
                >
                  <chakra.span display="block">
                    IDEIAS CONECTAM PESSOAS!
                  </chakra.span>
                </chakra.h1>
              </Box>
              <Box
                direction={{ base: "column", sm: "row" }}
                mt={{ base: 8, lg: 0 }}
                shrink={{ lg: 0 }}
              >
                <chakra.h3
                  fontSize={{ base: "md", sm: "3xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  lineHeight="shorter"
                  color={useColorModeValue("white", "gray.100")}
                >
                  <chakra.span
                    display="block"
                    color={useColorModeValue("white", "gray.500")}
                  >
                    Saiba como a Artcom conecta seu negócio a pessoas e
                    oportunidades
                  </chakra.span>
                </chakra.h3>

                <Link
                  w={["full", , "auto"]}
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  px={5}
                  py={3}
                  mt={3}
                  border="solid transparent"
                  fontWeight="bold"
                  rounded="md"
                  shadow="md"
                  color={useColorModeValue("black", "white")}
                  bg={useColorModeValue("yellow.700", "brand.500")}
                  _hover={{
                    bg: useColorModeValue("yellow.800", "brand.600"),
                  }}
                >
                  Conheça
                </Link>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
