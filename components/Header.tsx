import { FC, Fragment } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/layout";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import Image from "next/image";
import { Button, IconButton, ButtonGroup } from "@chakra-ui/button";
import { IoHome, IoBulb } from "react-icons/io5";
import { IoMdLogIn, IoMdPricetags } from "react-icons/io";
import { MdKeyboardArrowDown, MdDesktopMac } from "react-icons/md";
import {
  FaTag,
  FaToolbox,
  FaHouseUser,
  FaMoon,
  FaSun,
  FaUserAlt,
  FaRegSave,
  FaShoppingCart,
} from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import Lottie from "react-lottie";
import * as TecAnimation from "../animations/tec.json";
import { useColorMode } from "@chakra-ui/color-mode";
import { Tooltip } from "@chakra-ui/tooltip";

const Header: FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TecAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Fragment>
      <Head>
        <title>NK Informática e Gráfica | Tudo em um só lugar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box w="100%" h="max-content">
        <Container maxW="5xl">
          <Flex align="center" justify="space-between">
            <Box w="80px" h="80px">
              <Image
                src={
                  colorMode === "light"
                    ? "/img/logo.svg"
                    : "/img/logo-white.svg"
                }
                objectFit="contain"
                layout="responsive"
                height={200}
                width={200}
              />
            </Box>
            <HStack spacing={2}>
              <HStack d={["none", "none", "none", "flex", "flex"]}>
                <Button
                  colorScheme="blue"
                  variant="ghost"
                  leftIcon={<IoHome />}
                >
                  Início
                </Button>
                <Button
                  colorScheme="blue"
                  variant="ghost"
                  leftIcon={<IoBulb />}
                >
                  Sobre Nós
                </Button>
                <Menu placement="bottom-end">
                  <MenuButton
                    colorScheme="blue"
                    variant="ghost"
                    as={Button}
                    leftIcon={<IoMdPricetags />}
                    rightIcon={<MdKeyboardArrowDown />}
                  >
                    Portfólio
                  </MenuButton>
                  <MenuList>
                    <MenuItem icon={<FaToolbox />}>Nossos Serviços</MenuItem>
                    <MenuItem icon={<FaTag />}>Nossos Produtos</MenuItem>
                    <MenuItem icon={<MdDesktopMac />}>Nossos Sistemas</MenuItem>
                    <MenuItem icon={<BsShop />}>
                      Soluções para Empresas
                    </MenuItem>
                    <MenuItem icon={<FaHouseUser />}>
                      Soluções para o Consumidor
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Button
                  colorScheme="blue"
                  variant="ghost"
                  leftIcon={<IoBulb />}
                >
                  Fale Conosco
                </Button>
              </HStack>

              <HStack>
                <Tooltip
                  label={colorMode === "light" ? "Modo Escuro" : "Modo Claro"}
                >
                  <IconButton
                    aria-label="theme"
                    colorScheme="blue"
                    variant="ghost"
                    icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
                    onClick={toggleColorMode}
                  />
                </Tooltip>

                <Menu placement="bottom-end">
                  <MenuButton
                    colorScheme="blue"
                    variant="ghost"
                    as={IconButton}
                    icon={<FaUserAlt />}
                  />
                  <MenuList>
                    <MenuItem icon={<FaRegSave />}>Cadastre-se</MenuItem>
                    <MenuItem icon={<IoMdLogIn />}>Faça Login</MenuItem>
                  </MenuList>
                </Menu>

                <IconButton
                  aria-label="theme"
                  colorScheme="blue"
                  variant="ghost"
                  icon={<FaShoppingCart />}
                />
              </HStack>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Box
        bgGradient={
          colorMode === "light"
            ? "linear(to-r, blue.500, teal.400)"
            : "linear(to-r, blackAlpha.500, blackAlpha.400)"
        }
        pb={[10, 10, 0, 0, 0]}
      >
        <Container maxW="6xl">
          <Grid
            templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
            gap={5}
            alignItems="center"
            justifyItems="center"
            p={[0, 0, 7, 7, 7]}
          >
            <Flex justify="center" align="center">
              <Lottie
                options={defaultOptions}
                width={"100%"}
                isClickToPauseDisabled
                style={{ zIndex: 100 }}
              />
            </Flex>

            <Flex
              justify="center"
              align="center"
              direction="column"
              pr={[0, 0, 0, 10, 10]}
            >
              <Heading textAlign="center" color="white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Heading>
              <Text textAlign="center" mt={5} color="gray.100">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Text>

              <ButtonGroup mt={10} spacing={4}>
                <Button size="lg" leftIcon={<FaRegSave />} colorScheme="blue">
                  Cadastre-se
                </Button>
                <Button size="lg" leftIcon={<IoMdLogIn />} colorScheme="gray">
                  Faça Login
                </Button>
              </ButtonGroup>
            </Flex>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Header;
