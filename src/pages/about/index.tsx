
import {
  Box,
  Flex,
  HStack,
  Text,
  Center,
  AspectRatio,
  useColorModeValue,
  Grid,
  GridItem,
  Square,
  Image,
  chakra,
  SimpleGrid,
} from "@chakra-ui/react";
import { CardTeamComponent } from "../../constants/TeamConstants";
import Header from "../../components/Header/Header";
import SEO from "../../components/SEO";
import CardTeam from "../../components/CardTeam/CardTeam";
import Footer from "../../components/Footer/Footer";
export default function About() {
  return (


    <Flex w={["1366px"]} h={["1024px"]} mx="auto" mb={["5", "1"]}
      bg="white.700" width="100%" flexDirection="column">
      <SEO title="Sobre | ArtCom" description="Some description" />


      <Header bg="yellow.100%" />




      <AspectRatio margin="0" maxW="100%" maxH="auto" ratio={19 / 10}>
        <iframe
          src="https://www.youtube.com/embed/G0UMNrpW42g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">

        </iframe>
      </AspectRatio>








      {/* Pensar Analizar 
                                        
                                            Criar Realizar
                                        */}

      <Flex>


        <Box margin="auto">
          <Text fontWeight="bold"
            color="yellow.700"
            fontSize={["2rem", "5xl", "6xl"]}

            mt={["2", "1"]}>Pensar.  Analisar.  Criar.  Realizar</Text>






        </Box>

      </Flex>
      {/*  FIM PENSAR ANALIZAR CRIAR REALIZAR */}





      <Flex>
        {/* <Center w="200px" bg="white.500">
        </Center> */}

        <Center margin="auto" bg="white.500">
          <Text fontWeight="bold"
            color="gray.700"
            fontSize={["2.5rem"]} //fontSize={["2rem", "4xl", "6xl"]}
            mt={["2", "4"]}>INTEGRAÇÃO É A CHAVE DO SUCESSO</Text>
        </Center>

        {/* <Center w="300px" bg="white.500"></Center> */}




      </Flex>



      <Flex>


        <Box w="100%" h="auto" align="center">
          <Image
            w="70vw"
            h="auto"
            src="/images/img-sobre/sobre1.png"
            alt="Sobre ArtCom"
            loading="lazy"
          />
        </Box>


      </Flex>



      <Center>

        <SimpleGrid w="80vw" columns={3}>

          {CardTeamComponent.map((employee, index) => (
            <CardTeam
              key={index}
              name={employee.name}
              role={employee.role}
              path={employee.path}
            ></CardTeam>
          ))}


        </SimpleGrid>

      </Center>


      <Footer />
    </Flex>

















  );
}
