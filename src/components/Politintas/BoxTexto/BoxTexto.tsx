import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function App(){
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="md"
        mx="auto"
        py={4}
        px={8}
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
      >
        <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
          <Image
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor={useColorModeValue("brand.500", "brand.400")}
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </Flex>

        <chakra.h2
          color={useColorModeValue("gray.800", "white")}
          fontSize={{ base: "2xl", md: "3xl" }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          Design Tools
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
        POLITINTAS É A PRIMEIRA EM TINTAS E TUDO MAIS
A Politintas ocupa a primeira colocação no Recall de Marcas da Rede Gazeta há 18 anos. E, muito além das tintas, a rede também é especialista em complementos, ferramentas e utilidades para o lar. A nova campanha da marca ratifica sua própria história, expressando a tradição, qualidade e know-how obtido no passar dos anos.

Ficha Técnica
Agência: Artcom
Cliente: Politintas
Direção de Criação: Jorge Pedrosa
Diretor de Arte: Antônio Marcos Costa
Redação: Jorge Pedrosa, Rodrigo Haru
Atendimento: Filipe Lago
Produção gráfica: Pedro Tini
Mídia: Cilene Bassani
        </chakra.p>

        <Flex justifyContent="end" mt={4}>
          <Link
            
            fontSize="xl"
            color={useColorModeValue("brand.500", "brand.300")}
          >
            John Doe
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};
