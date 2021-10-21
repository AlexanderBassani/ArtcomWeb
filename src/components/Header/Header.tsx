import React from "react";

import {
  chakra,
  Flex,
  VisuallyHidden,
  HStack,
  Button,
  Image,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import SideMenu from "./SideMenu";
import { useRouter } from "next/dist/client/router";

interface Props {
  bg?: string;
}

export default function Header({ bg }: Props) {
  const { push } = useRouter();

  return (
    <chakra.header
      position="sticky"
      bg="transparent"
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        position="sticky"
      >
        <Flex >
          <chakra.a 
            href="/"
            title="ArtCom Home Page"
            display="flex"
            alignItems="center"
          >
           

      
           <Image 
                border="0px"
                borderColor="Yellow"
                h="80px"
                fit="fill"
                src="/images/logo/logo_artcom3.png"
                alt="Politintas"
                loading="lazy"
              />
       
        
          </chakra.a>


          


       
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            paddingRight="300px"
            mr={1}
            color="black"
            display={{ base: "none", xl: "inline-flex" }}
          >
            <Button
              _hover={{ bg: "yellow.800" }}
              variant="ghost"
              onClick={() => push("/")}
            >
              Home
            </Button>
            <Button
              _hover={{ bg: "yellow.800" }}
              variant="ghost"
              onClick={() => push("/about")}
            >
              Sobre
            </Button>
            <Button
              _hover={{ bg: "yellow.800" }}
              variant="ghost"
              onClick={() => push("/meridiano")}
            >
              Trabalhos
            </Button>
            <Button
              _hover={{ bg: "yellow.800" }}
              variant="ghost"
              onClick={() => push("/contact")}
            >
              Contato
            </Button>
            <IconButton
              display={{ base: "flex", xl: "none" }}
              aria-label="Abrir Manu"
              fontSize="20px"
              color={"blackAlpha.800"}
              _hover={{ bg: "yellow.800" }}
              _focus={{ boxShadow: "outline" }}
              variant="ghost"
              icon={<AiOutlineMenu />}
            />
          </HStack>
          <SideMenu />
        </HStack>
      </Flex>
    </chakra.header>
  );
}
