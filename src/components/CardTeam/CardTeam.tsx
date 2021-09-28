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
    <Flex w="180px"  mb={["5", "1"]}//mx="auto"
      bg={useColorModeValue("white", "gray.600")}
      p={0}//50px
      margin="auto auto 30px auto!important;"
      alignItems="center"
      justifyContent="center"
    >
      <Box  w="100%"  
        h="100%"
        // p="15px 0 0 0"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
       <Center> <Image w="180px" h="220px"  fit="cover" border-radius="10px 10px 0 0" src={path} alt="avatar" /></Center>

        <Box py={5} textAlign="center" padding="15px">
          <Link
            display="block"
            fontSize="1xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {name}
          </Link>
          <chakra.h3
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            {role}
          </chakra.h3>
        </Box>
      </Box>
    </Flex>
  );
}
