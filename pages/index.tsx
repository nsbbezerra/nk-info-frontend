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
} from "@chakra-ui/layout";
import type { NextPage } from "next";
import React from "react";
import Header from "../components/Header";
import { MdCheckCircle } from "react-icons/md";
import { useColorMode } from "@chakra-ui/color-mode";
import { BsCheck } from "react-icons/bs";
import Image from "next/image";
import { Button, IconButton } from "@chakra-ui/button";
import Carousel, {
  RenderArrowProps,
  RenderPaginationProps,
} from "react-elastic-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { configs } from "../configs/config";

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  const CustomArrow = ({ type, onClick, isEdge }: RenderArrowProps) => {
    const pointer =
      type === "PREV" ? <IoIosArrowBack /> : <IoIosArrowForward />;
    return (
      <Flex h="100%" justify="center" align="center">
        <IconButton
          onClick={onClick}
          disabled={isEdge}
          aria-label="Search database"
          icon={pointer}
          fontSize="3xl"
          variant="ghost"
          colorScheme="blue"
          _focus={{ outline: "none" }}
        />
      </Flex>
    );
  };

  const CustomPagination = ({
    pages,
    activePage,
    onClick,
  }: RenderPaginationProps) => {
    return (
      <Flex mt={3}>
        {pages.map((page) => {
          const isActivePage = activePage === page;
          return (
            <Box
              w="15px"
              h="15px"
              shadow="md"
              bg={isActivePage ? "blue.400" : "whiteAlpha.500"}
              key={page}
              onClick={() => onClick(page.toString())}
              rounded="full"
              mr={1}
              borderWidth="1px"
            />
          );
        })}
      </Flex>
    );
  };
  return (
    <React.Fragment>
      <Header />

      <Container maxW="6xl" mt={20}>
        <Flex direction="column" justify="center" align="center">
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
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={10}
          mt={20}
          justifyContent="center"
        >
          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "100px 1fr",
              "100px 1fr",
              "100px 1fr",
            ]}
            justifyItems="center"
            gap={5}
            alignItems="center"
            p={4}
            rounded="lg"
            shadow="lg"
            borderWidth="1px"
            _hover={{ transform: "scale(1.05)" }}
            transition="all .3s"
          >
            <Box w={["150px", "150px", "100px", "100px", "100px"]}>
              <Image
                src="/img/toolbox.svg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="contain"
                alt="NK Informática e Gráfica - Assistência Técnica"
              />
            </Box>
            <Box textAlign={["center", "center", "left", "left", "left"]}>
              <Heading fontSize="xl" mb={3}>
                Assistência Técnica
              </Heading>
              <Text>
                Assistência técnica especializada em Notebooks, Desktops,
                Impressoras e Scanners, Montagem e manutenção de Redes
                Corporativas e Residenciais.
              </Text>
            </Box>
          </Grid>

          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "100px 1fr",
              "100px 1fr",
              "100px 1fr",
            ]}
            justifyItems="center"
            gap={5}
            alignItems="center"
            p={4}
            rounded="lg"
            shadow="lg"
            borderWidth="1px"
            _hover={{ transform: "scale(1.05)" }}
            transition="all .3s"
          >
            <Box w={["150px", "150px", "100px", "100px", "100px"]}>
              <Image
                src="/img/paint.svg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="contain"
                alt="NK Informática e Gráfica - Gráfica e Comunicação Visual"
              />
            </Box>
            <Box textAlign={["center", "center", "left", "left", "left"]}>
              <Heading fontSize="xl" mb={3}>
                Gráfica e Comunicação Visual
              </Heading>
              <Text>
                Cartões de Visita, Banners, Flyers, Faixas, Fachadas, Blocos
                Autocopiativos, Receituários, tudo isso e muito mais...
              </Text>
            </Box>
          </Grid>

          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "100px 1fr",
              "100px 1fr",
              "100px 1fr",
            ]}
            justifyItems="center"
            gap={5}
            alignItems="center"
            p={4}
            rounded="lg"
            shadow="lg"
            borderWidth="1px"
            _hover={{ transform: "scale(1.05)" }}
            transition="all .3s"
          >
            <Box w={["150px", "150px", "100px", "100px", "100px"]}>
              <Image
                src="/img/marketing.svg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="contain"
                alt="NK Informática e Gráfica - Marketing Digital"
              />
            </Box>
            <Box textAlign={["center", "center", "left", "left", "left"]}>
              <Heading fontSize="xl" mb={3}>
                Marketing Digital
              </Heading>
              <Text>
                Materiais de Publicidade Digital, Vídeos, Animações, Áudio,
                Gestão de Redes Sociais, E-Commerce, Promoções e etc...
              </Text>
            </Box>
          </Grid>

          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "100px 1fr",
              "100px 1fr",
              "100px 1fr",
            ]}
            justifyItems="center"
            gap={5}
            alignItems="center"
            p={4}
            rounded="lg"
            shadow="lg"
            borderWidth="1px"
            _hover={{ transform: "scale(1.05)" }}
            transition="all .3s"
          >
            <Box w={["150px", "150px", "100px", "100px", "100px"]}>
              <Image
                src="/img/devops.svg"
                width={200}
                height={200}
                layout="responsive"
                objectFit="contain"
                alt="NK Informática e Gráfica - Web Sites e Sistemas"
              />
            </Box>
            <Box textAlign={["center", "center", "left", "left", "left"]}>
              <Heading fontSize="xl" mb={3}>
                Web Sites e Sistemas
              </Heading>
              <Text>
                Sistema de Gestão Empresarial, Web Sites em geral: Landing
                Pages, Institucionais, Portais, Blogs, E-Commerce, Dashboards...
              </Text>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        mt={20}
        backgroundImage="url(/img/computer.jpg)"
        backgroundAttachment="fixed"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Box
          p={10}
          bg={colorMode === "light" ? "whiteAlpha.700" : "blackAlpha.900"}
        >
          <Container maxW="5xl">
            <Flex direction="column" justify="center" align="center">
              <Heading mt={3} mb={5} textAlign="center">
                Sistemas Operacionais Suportados
              </Heading>

              <Box
                width="200px"
                h="4px"
                bgGradient="linear(to-r, blue.500, blue.800)"
              />
            </Flex>

            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={10}
              justifyItems="center"
              alignItems="center"
              mt={10}
            >
              <Flex justify="center" align="center" direction="column">
                <Box w="120px">
                  <Image
                    src="/img/windows.svg"
                    width={200}
                    height={200}
                    layout="responsive"
                    objectFit="contain"
                    alt="NK Informática e Gráfica - Assistência Técnica"
                  />
                </Box>
                <Heading textAlign="center" fontSize="2xl" mt={5}>
                  WINDOWS
                </Heading>
              </Flex>

              <Flex justify="center" align="center" direction="column">
                <Box w="120px">
                  <Image
                    src="/img/linux.svg"
                    width={200}
                    height={200}
                    layout="responsive"
                    objectFit="contain"
                    alt="NK Informática e Gráfica - Assistência Técnica"
                  />
                </Box>
                <Heading textAlign="center" fontSize="2xl" mt={5}>
                  LINUX
                </Heading>
              </Flex>

              <Flex justify="center" align="center" direction="column">
                <Box w="120px">
                  <Image
                    src="/img/mac.svg"
                    width={200}
                    height={200}
                    layout="responsive"
                    objectFit="contain"
                    alt="NK Informática e Gráfica - Assistência Técnica"
                  />
                </Box>
                <Heading textAlign="center" fontSize="2xl" mt={5}>
                  MAC OS
                </Heading>
              </Flex>
            </Grid>
          </Container>
        </Box>
      </Box>

      <Container mt={20} maxW="6xl">
        <Flex direction="column" justify="center" align="center">
          <Heading mt={3} mb={5} textAlign="center">
            Planos de Assistência Técnica para Empresas
          </Heading>

          <Box
            width="200px"
            h="4px"
            bgGradient="linear(to-r, blue.500, blue.800)"
          />

          <Text mt={3} textAlign="center">
            Escolha o plano que combina com o seu negócio!
          </Text>
        </Flex>

        <Box mt={10}>
          <Carousel
            isRTL={false}
            itemPadding={[26, 15]}
            itemsToShow={3}
            itemsToScroll={1}
            renderArrow={CustomArrow}
            renderPagination={CustomPagination}
            breakPoints={configs.carousel}
          >
            <Box
              rounded="2xl"
              borderWidth="1px"
              shadow="lg"
              overflow="hidden"
              w="320px"
              _hover={{ transform: "scale(1.05)" }}
              transition="all .3s"
            >
              <Flex
                p={5}
                bgGradient="linear(to-r, #c1beba, #e5e4e2)"
                justify="center"
                align="center"
                direction="column"
                textAlign="center"
              >
                <Text
                  fontSize={["lg", "3xl", "3xl", "3xl", "3xl"]}
                  fontWeight="bold"
                  color="gray.700"
                >
                  Plano Premium
                </Text>
                <Flex justify="center" align="flex-end">
                  <Text
                    fontSize={["xl", "4xl", "4xl", "4xl", "4xl"]}
                    color="gray.700"
                    fontWeight="semibold"
                    mb={[-1, -2, -2, -2, -2]}
                  >
                    R$ 180,00
                  </Text>
                  <Text
                    fontSize={["md", "2xl", "2xl", "2xl", "2xl"]}
                    color="gray.700"
                    ml={2}
                  >
                    / mês
                  </Text>
                </Flex>
              </Flex>

              <Box p={5}>
                <List spacing={3} fontSize={["xs", "md", "md", "md", "md"]}>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>

                <Button
                  isFullWidth
                  colorScheme="blue"
                  mt={5}
                  leftIcon={<BsCheck />}
                >
                  Contratar
                </Button>
              </Box>
            </Box>
            <Box
              rounded="2xl"
              borderWidth="1px"
              shadow="lg"
              overflow="hidden"
              w="320px"
              _hover={{ transform: "scale(1.05)" }}
              transition="all .3s"
            >
              <Flex
                p={5}
                bgGradient="linear(to-r, #DAA520, #FFD700)"
                justify="center"
                align="center"
                direction="column"
                textAlign="center"
              >
                <Text
                  fontSize={["lg", "3xl", "3xl", "3xl", "3xl"]}
                  fontWeight="bold"
                  color="gray.700"
                >
                  Plano Gold
                </Text>
                <Flex justify="center" align="flex-end">
                  <Text
                    fontSize={["xl", "4xl", "4xl", "4xl", "4xl"]}
                    color="gray.700"
                    fontWeight="semibold"
                    mb={[-1, -2, -2, -2, -2]}
                  >
                    R$ 180,00
                  </Text>
                  <Text
                    fontSize={["md", "2xl", "2xl", "2xl", "2xl"]}
                    color="gray.700"
                    ml={2}
                  >
                    / mês
                  </Text>
                </Flex>
              </Flex>

              <Box p={5}>
                <List spacing={3} fontSize={["xs", "md", "md", "md", "md"]}>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>

                <Button
                  isFullWidth
                  colorScheme="blue"
                  mt={5}
                  leftIcon={<BsCheck />}
                >
                  Contratar
                </Button>
              </Box>
            </Box>

            <Box
              rounded="2xl"
              borderWidth="1px"
              shadow="lg"
              overflow="hidden"
              w="320px"
              _hover={{ transform: "scale(1.05)" }}
              transition="all .3s"
            >
              <Flex
                p={5}
                bgGradient="linear(to-r, #c0c0c0, #dfdfdf)"
                justify="center"
                align="center"
                direction="column"
                textAlign="center"
              >
                <Text
                  fontSize={["lg", "3xl", "3xl", "3xl", "3xl"]}
                  fontWeight="bold"
                  color="gray.700"
                >
                  Plano Prata
                </Text>
                <Flex justify="center" align="flex-end">
                  <Text
                    fontSize={["xl", "4xl", "4xl", "4xl", "4xl"]}
                    color="gray.700"
                    fontWeight="semibold"
                    mb={[-1, -2, -2, -2, -2]}
                  >
                    R$ 180,00
                  </Text>
                  <Text
                    fontSize={["md", "2xl", "2xl", "2xl", "2xl"]}
                    color="gray.700"
                    ml={2}
                  >
                    / mês
                  </Text>
                </Flex>
              </Flex>

              <Box p={5}>
                <List spacing={3} fontSize={["xs", "md", "md", "md", "md"]}>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>

                <Button
                  isFullWidth
                  colorScheme="blue"
                  mt={5}
                  leftIcon={<BsCheck />}
                >
                  Contratar
                </Button>
              </Box>
            </Box>

            <Box
              rounded="2xl"
              borderWidth="1px"
              shadow="lg"
              overflow="hidden"
              w="320px"
              _hover={{ transform: "scale(1.05)" }}
              transition="all .3s"
            >
              <Flex
                p={5}
                bgGradient="linear(to-r, #cd7f32, #e4a875)"
                justify="center"
                align="center"
                direction="column"
                textAlign="center"
              >
                <Text
                  fontSize={["lg", "3xl", "3xl", "3xl", "3xl"]}
                  fontWeight="bold"
                  color="gray.700"
                >
                  Plano Bronze
                </Text>
                <Flex justify="center" align="flex-end">
                  <Text
                    fontSize={["xl", "4xl", "4xl", "4xl", "4xl"]}
                    color="gray.700"
                    fontWeight="semibold"
                    mb={[-1, -2, -2, -2, -2]}
                  >
                    R$ 180,00
                  </Text>
                  <Text
                    fontSize={["md", "2xl", "2xl", "2xl", "2xl"]}
                    color="gray.700"
                    ml={2}
                  >
                    / mês
                  </Text>
                </Flex>
              </Flex>

              <Box p={5}>
                <List spacing={3} fontSize={["xs", "md", "md", "md", "md"]}>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Assumenda, quia temporibus eveniet a libero incidunt
                    suscipit
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={MdCheckCircle}
                      color={colorMode === "light" ? "blue.500" : "blue.200"}
                    />
                    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                  </ListItem>
                </List>

                <Button
                  isFullWidth
                  colorScheme="blue"
                  mt={5}
                  leftIcon={<BsCheck />}
                >
                  Contratar
                </Button>
              </Box>
            </Box>
          </Carousel>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
