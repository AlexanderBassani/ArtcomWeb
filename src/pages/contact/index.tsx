import { Box, Flex, Text } from "@chakra-ui/react";
import { Form } from "../../components/Form/Form";
import Header from "../../components/Header/Header";

export default function Contact() {
  return (
    <>
      <Header bg="yellow.700" />
      <Flex
        bg="yellow.700"
        justify="center"
        align="center"
        flexDirection="column"
        w="100vw"
        h="100vh"
      >
        <Flex justifyContent="center" ml={["55", "20"]}>
          <Text fontSize="2xl" fontWeight="medium">
            Oportunidades são como boas ideias: quando surgem, a gente precisa
            aproveitar! Cadastre seu currículo com a gente e, assim que aparecer
            uma chance, a gente te chama pra conversar.
          </Text>
        </Flex>
        <Form />
      </Flex>
    </>
  );
}
