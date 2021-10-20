import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import type { NextPage } from "next";
import React from "react";
import Header from "../components/Header";
import { FaDesktop } from "react-icons/fa";
import { MdCheckCircle, MdPublic } from "react-icons/md";
import { useColorMode } from "@chakra-ui/color-mode";
import { CgToolbox } from "react-icons/cg";
import { BsBrush } from "react-icons/bs";
import Image from "next/image";

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
              <Icon as={CgToolbox} fontSize="6xl" color="blue.500" />
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
              <Icon as={BsBrush} fontSize="6xl" color="blue.500" />
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

      <Box
        p={10}
        mt={20}
        bg={colorMode === "light" ? "blackAlpha.50" : "blackAlpha.300"}
      >
        <Container maxW="6xl">
          <Flex direction="column" justify="center" align="center">
            <Heading mb={5} textAlign="center">
              Nossos Produtos
            </Heading>
            <Box
              width="200px"
              h="4px"
              bgGradient="linear(to-r, blue.500, blue.800)"
            />
            <Text
              fontSize="lg"
              color={colorMode === "light" ? "gray.600" : "gray.300"}
              mt={3}
            >
              O Produto personalizado para sua empresa, sua casa, seus estudos,
              nós temos aqui!
            </Text>
          </Flex>

          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "380px 1fr",
              "380px 1fr",
              "380px 1fr",
            ]}
            gap={10}
            mt={6}
            alignItems="center"
            justifyItems="center"
          >
            <Box w="380px">
              <Image
                src="/img/computer.png"
                width={380}
                height={380}
                layout="responsive"
                objectFit="contain"
              />
            </Box>
            <Box>
              <Heading
                color={colorMode === "light" ? "blue.500" : "blue.300"}
                fontSize="3xl"
              >
                Assistência Técnica
              </Heading>

              <List spacing={2} fontSize="xl" mt={5}>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "380px 1fr",
              "380px 1fr",
              "380px 1fr",
            ]}
            gap={10}
            alignItems="center"
            justifyItems="center"
          >
            <Box>
              <Heading
                color={colorMode === "light" ? "blue.500" : "blue.300"}
                fontSize="3xl"
              >
                Gráfica e Comunicação Visual
              </Heading>

              <List spacing={2} fontSize="xl" mt={5}>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Box>

            <Box w="380px">
              <Image
                src="/img/paint.png"
                width={380}
                height={380}
                layout="responsive"
                objectFit="contain"
              />
            </Box>
          </Grid>

          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "380px 1fr",
              "380px 1fr",
              "380px 1fr",
            ]}
            gap={10}
            alignItems="center"
            justifyItems="center"
          >
            <Box w="380px">
              <Image
                src="/img/marketing.png"
                width={380}
                height={380}
                layout="responsive"
                objectFit="contain"
              />
            </Box>
            <Box>
              <Heading
                color={colorMode === "light" ? "blue.500" : "blue.300"}
                fontSize="3xl"
              >
                Marketing Digital
              </Heading>

              <List spacing={2} fontSize="xl" mt={5}>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "380px 1fr",
              "380px 1fr",
              "380px 1fr",
            ]}
            gap={10}
            alignItems="center"
            justifyItems="center"
          >
            <Box>
              <Heading
                color={colorMode === "light" ? "blue.500" : "blue.300"}
                fontSize="3xl"
              >
                Sites e Sistemas
              </Heading>

              <List spacing={2} fontSize="xl" mt={5}>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={MdCheckCircle}
                    color={colorMode === "light" ? "blue.500" : "blue.300"}
                  />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Box>

            <Box w="380px">
              <Image
                src="/img/system.png"
                width={380}
                height={380}
                layout="responsive"
                objectFit="contain"
              />
            </Box>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Home;
