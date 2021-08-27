/* eslint-disable no-sparse-arrays */
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Carrousel from "../components/Carrousel/Carrousel";
import { CarrouselCampaignComponent } from "../constants/CarrouselConstants";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Link,
  Text,
  Button,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import SEO from "../components/SEO";
export default function Home() {
  return (
    <>
      <SEO title="Home | ArtCom" description="Some description" />
      <Header bg="yellow.700" />
     
     
     
      <Flex
        bg={useColorModeValue("yellow.700", "gray.600")}
        w="full"
        alignItems="center"
        justifyContent="center"
        p={50}
      >
        <Carrousel campaigns={CarrouselCampaignComponent}></Carrousel>



        
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
            py={{ base: 12, lg: 16 }}
            px={{ base: 4, lg: 8 }}
            display={{ lg: "flex" }}
            alignItems={{ lg: "center" }}
            justifyContent={{ lg: "space-between" }}
          >
            <HStack spacing={{ base: 10, sm: 20, lg: 40 }}>
              <Box
                direction={{ base: "column", sm: "row" }}
                mt={{ base: 8, lg: 0 }}
                shrink={{ lg: 0 }}
              >
                <chakra.h1
                  fontSize={{ base: "2xl", sm: "6xl" }}
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
                  fontSize={{ base: "1xl", sm: "4xl" }}
                  fontWeight="extrabold"
                  letterSpacing="tight"
                  lineHeight="shorter"
                  color={useColorModeValue("gray.900", "gray.100")}
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
                    bg: useColorModeValue("yellow.700", "brand.600"),
                  }}
                >
                  Conheça
                </Link>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Flex>
      {/* Acessa Outras Campanhas */}
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
          <Box textAlign={{ lg: "center" }} mb={32}>
            <chakra.h1
              fontSize={{ base: "4xl", sm: "5xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color={useColorModeValue("black", "gray.100")}
            >
              <chakra.p mt={2}>Acesse outras Campanhas</chakra.p>
            </chakra.h1>
          </Box>






          {/* Campanha Politintas */}
          <SimpleGrid
            alignItems="start"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box  order={{ md: 2 }}>
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("yellow.700", "gray.400")}
                lineHeight={{ md: "shorter" }}
              >
                POLITINTAS É A PRIMEIRA EM TINTAS E TUDO MAIS
             </chakra.h2>
    
              <Image
                w="100%"
                h="100%"
                fit="fill"
                src="/images/campanhas/politintas/politintas.jpg"
                alt="Politintas"
                loading="lazy"
              />
            <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("black", "gray.400")}
                fontSize={{ md: "lg" }}
              >
             A Politintas ocupa a primeira colocação no Recall de Marcas da Rede Gazeta há 18 anos. E, muito além das tintas, a rede também é especialista em complementos, ferramentas e utilidades para o lar. A nova campanha da marca ratifica sua própria história, expressando a tradição, qualidade e know-how obtido no passar dos anos.
              </chakra.p>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bg={useColorModeValue("yellow.700", "gray.700")}
                _hover={{ bg: useColorModeValue("yellow.800", "gray.600") }}
                color={useColorModeValue("white", "gray.200")}
                as="a"
              >
                  <Link href="/politintas">
                    Leia Mais
                  </Link>
              </Button>
            </Box>
          </SimpleGrid>













          {/* Campanha Parque -Serra */}
     
       <SimpleGrid
            alignItems="start"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box  order={{ md: 2 }}>
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("yellow.700", "gray.400")}
                lineHeight={{ md: "shorter" }}
                >

AGORA O PARQUE DA CIDADE É O MAIOR PARQUE DO ESTADO
              </chakra.h2>
            
              <Image
                w="100%"
                h="100%"
                fit="fill"
                src="/images/campanhas/serra/serra.jpg"
                alt=""
                loading="lazy"
              />
                      
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("black", "gray.400")}
                fontSize={{ md: "lg" }}
              >
           O Parque da Cidade, na Serra (ES), é um local cheio de atrativos e beleza, que recebe milhares de cidadãos por dia. Após a realização das obras de ampliação no local, o Parque passou a ser o maior do Espírito Santo. Motivo de orgulho para a cidade e satisfação para seus cidadãos, a campanha apresentou a estrutura do local e seu aproveitamento pelas famílias, esportistas, crianças, jovens e outros perfis de público frequentador. 
              </chakra.p>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bg={useColorModeValue("yellow.700", "gray.700")}
                _hover={{ bg: useColorModeValue("yellow.800", "gray.600") }}
                color={useColorModeValue("white", "gray.200")}
                as="a"
              >
          <Link href="/serra">
                    Leia Mais
                  </Link>

              </Button>
            </Box>
        
          </SimpleGrid>

          {/*campanha serra fim*/}





     
          {/* Campanha Cariacica */}
     
       <SimpleGrid
            alignItems="start"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box  order={{ md: 2 }}>
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("yellow.700", "gray.400")}
                lineHeight={{ md: "shorter" }}
                >

CARIACICA: PENSANDO NO FUTURO FAZEMOS O PRESENTE
              </chakra.h2>
            
              <Image
                w="100%"
                h="100%"
                fit="fill"
                src="/images/campanhas/cariacica/cariacica.jpg"
                alt="campanha cariacica"
                loading="lazy"
              />
                      
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("black", "gray.400")}
                fontSize={{ md: "lg" }}
              >
         Cariacica terminou o ano de 2019 como a cidade campeã de investimentos no ES. Foram realizadas muitas melhorias e entregas importantes para a população. A campanha presta contas da atividade municipal no ano, apresentando uma cidade que cresce a olhos vistos, otimista com o futuro e que trabalha muito no presente.
              </chakra.p>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bg={useColorModeValue("yellow.700", "gray.700")}
                _hover={{ bg: useColorModeValue("yellow.800", "gray.600") }}
                color={useColorModeValue("white", "gray.200")}
                as="a"
              >
              <Link href="/cariacica">
                    Leia Mais
                  </Link>

              </Button>
            </Box>
        
          </SimpleGrid>















          {/* Campanha Cariacica */}
     
          <SimpleGrid
            alignItems="start"
            columns={{ base: 1, md: 2 }}
            mb={24}
            spacingY={{ base: 10, md: 32 }}
            spacingX={{ base: 10, md: 24 }}
          >
            <Box  order={{ md: 2 }}>
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("yellow.700", "gray.400")}
                lineHeight={{ md: "shorter" }}
                >

           A TRINUNA: FAKE NEWS
              </chakra.h2>
            
              <Image
                w="100%"
                h="100%"
                fit="fill"
                src="/images/campanhas/tribuna/tribuna.jpg"
                alt="campanha cariacica"
                loading="lazy"
              />
                      
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("black", "gray.400")}
                fontSize={{ md: "lg" }}
              >
              
              Alerta de Fake News! Passe para frente. Conheça esta campanha que fizemos para a Rede Tribuna com o objetivo de reafirmar a credibilidade dos jornais impressos perante as Fake News que se disseminam nas plataformas de comunicação tecnológicas. Vale sempre lembrar: a melhor versão sobre um fato é a verdade.

              </chakra.p>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bg={useColorModeValue("yellow.700", "gray.700")}
                _hover={{ bg: useColorModeValue("yellow.800", "gray.600") }}
                color={useColorModeValue("white", "gray.200")}
                as="a"
              >
                Leia Mais
              </Button>
            </Box>
        
          </SimpleGrid>










       



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
