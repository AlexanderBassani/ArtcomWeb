import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  Flex,
  Image,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import { useRouter } from "next/dist/client/router";
export default function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { push } = useRouter();

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        color="blackAlpha.900"
        _hover={{
          bg: "blackAlpha.300",
          color: "whiteAlpha.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {/* {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: "gray.300",
            }}
            as={icon}
          />
        )} */}
        {children}
      </Flex>
    );
  };
  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="yellow.700"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >

      <Flex px="4" py="5" align="center">
     {/*

        <Logo />
        <Text
          fontSize={["sm", "md", "lg", "xl"]}
          ml="2"
          color="white"
          fontWeight="semibold"
        >
          ArtCom
        </Text>

     */}


        <Image
                w="60%"
                h="60%"
                fit="fill"
                src="/images/logo/logo_artcom3.png"
                alt="Politintas"
                loading="lazy"
              />
                


      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize={["sm", "md", "lg", "xl"]}
        color="yellow.700"
        aria-label="Main Navigation"
      >
        <Link href="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link href="/about">
          <NavItem>Sobre</NavItem>
        </Link>
        <Link href="/meridiano">
          <NavItem>Trabalhos</NavItem>
        </Link>
        <Link href="/contact">
          <NavItem>Contato</NavItem>
        </Link>
      </Flex>
    </Box>
  );
  return (
    <>
      <IconButton
        ref={btnRef}
        display={{ base: "flex", xl: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        color={"blackAlpha.800"}
        variant="ghost"
        icon={<AiOutlineMenu />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
    </>
  );
}
