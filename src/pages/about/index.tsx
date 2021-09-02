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
export default function About() {
  return (


          <Flex  w={["Full","270px","640px","720px","1366px","1024px"]} h={["Full","200px","360px","540x","1024px","768px"]}  mx="auto" mb={["5", "1"]}
          bg="white.700" width="100%" flexDirection="column">
                <SEO title="Sobre | ArtCom" description="Some description" />


                <Header bg="yellow.100%" />




                <AspectRatio maxW="100%" maxH="450px" ratio={10 / 7}>
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
                                               

                                                <Box paddingLeft="20%">
                                                <Text   fontWeight="bold"
                                                        color="yellow.700"
                                                        fontSize={["2rem", "5xl", "6xl"]}

                                                    mt={["2", "1"]}>Pensar . Analisar . Criar . Realizar</Text>


                                               
                                              
                                            
                              
                                              </Box>

                                              </Flex>
                                          {/*  FIM PENSAR ANALIZAR CRIAR REALIZAR */}





                                          <Flex>
                                               <Center w="200px" bg="white.500">
                                               </Center>

                                                      <Center w="100%" bg="white.500">
                                                <Text   fontWeight="bold"
                                                        color="gray.700"
                                                        fontSize={["2em", "4xl", "6xl"]}
                                                        mt={["2", "4"]}>INTEGRAÇÃO É A CHAVE DO SUCESSO</Text>
                                              </Center>

                                              <Center w="300px" bg="white.500"></Center>
                                              
                                              
                                              
                                              
                                            </Flex>



                                        <Flex>
          

                                                     <Box w="100%" h="auto" align="center">
                  <Image
                    w="auto"
                    h="auto"
                    src="/images/img-sobre/sobre1.png"
                    alt="Sobre ArtCom"
                    loading="lazy"
                  />
                </Box>

                               
        </Flex>





        <SimpleGrid columns={2}>
        {CardTeamComponent.map((employee, index) => (
          <CardTeam
            key={index}
            name={employee.name}
            role={employee.role}
            path={employee.path}
          ></CardTeam>
        ))}
      </SimpleGrid>


      
          </Flex>




       











  );
}
