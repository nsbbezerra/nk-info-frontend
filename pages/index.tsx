import { Box, Container, Flex, Grid, Heading, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import type { NextPage } from "next";
import React from "react";
import Header from "../components/Header";
import { FaDesktop, FaPaintBrush, FaToolbox } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { useColorMode } from "@chakra-ui/color-mode";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <React.Fragment>
      <Header />

      <Container maxW="6xl" mt={20}>
        <Flex direction="column" justify="center" align="center">
          <Text
            fontSize="lg"
            color={colorMode === "light" ? "gray.600" : "gray.300"}
          >
            Veja aqui
          </Text>

          <Heading mt={3} mb={5} textAlign="center">
            O que nós temos para você!
          </Heading>

          <Box
            width="200px"
            h="4px"
            bgGradient="linear(to-r, blue.500, blue.800)"
          />
        </Flex>

        <Grid
          templateColumns="repeat(auto-fit, minmax(250px, 250px))"
          gap={10}
          mt={20}
          justifyContent="center"
        >
          <Flex>
            <Box mr={7}>
              <Icon as={FaToolbox} fontSize="6xl" color="blue.500" />
            </Box>
            <Box>
              <Heading fontSize="lg" mb={3}>
                Assistência Técnica
              </Heading>
              <Text fontSize="sm">
                Assistência técnica especializada em Notebooks, Desktops,
                Impressoras e Scanners, Montagem e manutenção de Redes
                Corporativas e Residenciais.
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box mr={7}>
              <Icon as={FaPaintBrush} fontSize="6xl" color="blue.500" />
            </Box>
            <Box>
              <Heading fontSize="lg" mb={3}>
                Gráfica e Comunicação Visual
              </Heading>
              <Text fontSize="sm">
                Cartões de Visita, Banners, Flyers, Faixas, Fachadas, Blocos
                Autocopiativos, Receituários, tudo isso e muito mais...
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box mr={7}>
              <Icon as={MdPublic} fontSize="6xl" color="blue.500" />
            </Box>
            <Box>
              <Heading fontSize="lg" mb={3}>
                Marketing Digital
              </Heading>
              <Text fontSize="sm">
                Materiais de Publicidade Digital, Vídeos, Animações, Áudio,
                Gestão de Redes Sociais, E-Commerce, Promoções e etc...
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box mr={7}>
              <Icon as={FaDesktop} fontSize="6xl" color="blue.500" />
            </Box>
            <Box>
              <Heading fontSize="lg" mb={3}>
                Web Sites e Sistemas
              </Heading>
              <Text fontSize="sm">
                Sistema de Gestão Empresarial, Web Sites em geral: Landing
                Pages, Institucionais, Portais, Blogs, E-Commerce, Dashboards...
              </Text>
            </Box>
          </Flex>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
