import dynamic from "next/dynamic";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO";
import CarrouselCampaign from "../../components/Carrousel/Carrousel";
import { MeridianoCampaing } from "../../constants/meridianoCampaingn";
export default function LastPage() {
  return (
    <>
      <SEO
        title="Meridiano, PARA MUDAR O DIA, SÓ UM BOM CAFÉ"
        description="Tem dia que parece que não estamos legal. Falta ânimo, e força. Mas só parece mesmo, porque quando chega o Café Meridiano, chega junto a energia que a gente precisa para brilhar!"
      />
      <Flex width="100vw" bg="white" flexDirection="column">
        <Header />
        <Box as="section">
          <AspectRatio maxW="100%" ratio={9 / 3}>
            <iframe
              width="1280"
              height="725"
              src="https://www.youtube.com/embed/JYPTvARAKiA?list=PL59ihBqdPntmBU8GjQOLevtBmvAOxIB3s"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </AspectRatio>

          <CarrouselCampaign campaigns={MeridianoCampaing} />

          <Flex
            flexDirection={["column", "row"]}
            align="center"
            justify="center"
            mt="6"
            ml="6"
            mr="6"
            mb="8"
          >
            <Box maxWidth="450px">
              <Text fontSize="5xl" color="yellow.500" fontFamily="Fredoka One">
                Meridiano
              </Text>
              <Text
                fontSize="2xl"
                color="yellow.500"
                fontWeight="bold"
                fontFamily="Fredoka One"
              >
                PARA MUDAR O DIA, SÓ UM BOM CAFÉ
              </Text>
            </Box>

            <Box ml={["6", "4"]} maxWidth="450px">
              <Text fontSize="2xl" fontWeight="bold" fontFamily="Popins">
                Tem dia que parece que não estamos legal. Falta ânimo, e força.
                Mas só parece mesmo, porque quando chega o Café Meridiano, chega
                junto a energia que a gente precisa para brilhar!
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </>
  );
}
