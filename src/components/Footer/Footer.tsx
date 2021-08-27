import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../Logo";
import SocialButton from "./SocialButtons";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("yellow.700", "yellow.800")}
      color={useColorModeValue("black", "gray.200")}
      w="full"
    >
      <Container as={Stack} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("yellow.700", "yellow.800")} />
            </Box>
            <Text fontSize={"sm"}>
              © ArtCom 2021 | Todos os direitos reservados
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"} fontSize={["sm", "md", "lg", "xl"]}>
            <ListHeader>Menu</ListHeader>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>Sobre</Link>
            <Link href={"/meridiano"}>Trabalhos</Link>
            <Link href={"/contact"}>Contatos</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Stack direction={"column"}>
              <Text fontWeight="bold" fontSize={["sm", "md", "lg", "xl"]}>
                (27) 3357-0000
              </Text>
              <Text fontSize={["sm", "md"]}>R. José Luís Gabeira,</Text>
              <Text fontSize={["sm", "md"]}>
                111 - Barro Vermelho, Vitória - ES, 29057-570
              </Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
