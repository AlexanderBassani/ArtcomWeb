import { Flex, Image } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
export default function NotFound() {
  return (
    <>
      <Header bg="yellow.700" />
      <Flex justify="center" align="center" mt="15" bg="white">
        <Image src="./gifs/not-found.gif" alt="Not Found" />
      </Flex>
      <Footer />
    </>
  );
}
