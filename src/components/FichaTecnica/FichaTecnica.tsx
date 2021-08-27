import React from "react";
import Image from 'next/image';
import { FichaTecnicaProps } from "../../types/types";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function FichaTecnica ({ name, role}: FichaTecnicaProps) {
  return (
   
       

         <Text color={'gray.500'}>
        {role}: {name}
        </Text>

       
       
  );
}