import React from "react";
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function QuadroTexto() {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
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

          {/*
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
          POLITINTAS É A PRIMEIRA EM TINTAS E TUDO MAIS
          </Heading>
    </Box>*/}
       
         <Text color={'gray.500'}>
        Agência: Artcom
        </Text>
        <Text color={'gray.500'}>
        Cliente: Politintas
        </Text>
        <Text color={'gray.500'}>
        Direção de Criação: Jorge Pedrosa
        </Text>
        <Text color={'gray.500'}>
        Diretor de Arte: Antônio Marcos Costa
        </Text>
        <Text color={'gray.500'}>
        Redação: Jorge Pedrosa, Rodrigo Haru
        </Text>
        <Text color={'gray.500'}>
        Atendimento: Filipe Lago
        </Text>
        <Text color={'gray.500'}>
        Produção gráfica: Pedro Tini
        </Text>
        <Text color={'gray.500'}>
        Mídia: Cilene Bassani
          </Text>
        </Stack>

        {/*
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
        */}

      </Box>
    </Center>
  );
}