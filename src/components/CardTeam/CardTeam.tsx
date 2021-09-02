import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  Center,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { CardTeamProps } from "../../types/types";

export default function CardTeam({ name, role, path }: CardTeamProps) {
  return (
    <Flex   w="200px"  mx="auto" mb={["5", "1"]}
      bg={useColorModeValue("white", "gray.600")}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Box   w={["xs","400px"]} h={["xs","400px"]} 
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
       <Center> <Image w="full"  width="60%" h={56} fit="cover" src={path} alt="avatar" /></Center>

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {name}
          </Link>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            {role}
          </chakra.span>
        </Box>
      </Box>
    </Flex>
  );
}
