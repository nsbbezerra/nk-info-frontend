import { Button, IconButton } from "@chakra-ui/button";
import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/layout";
import { FC } from "react";
import Carousel, {
  RenderArrowProps,
  RenderPaginationProps,
} from "react-elastic-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdCheckCircle } from "react-icons/md";
import { configs } from "../configs/config";
import { useColorMode } from "@chakra-ui/color-mode";
import { BsCheck } from "react-icons/bs";

const CarouselApp: FC = () => {
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
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon
                as={MdCheckCircle}
                color={colorMode === "light" ? "blue.500" : "blue.200"}
              />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>

          <Button isFullWidth colorScheme="blue" mt={5} leftIcon={<BsCheck />}>
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
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon
                as={MdCheckCircle}
                color={colorMode === "light" ? "blue.500" : "blue.200"}
              />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>

          <Button isFullWidth colorScheme="blue" mt={5} leftIcon={<BsCheck />}>
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
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon
                as={MdCheckCircle}
                color={colorMode === "light" ? "blue.500" : "blue.200"}
              />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>

          <Button isFullWidth colorScheme="blue" mt={5} leftIcon={<BsCheck />}>
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
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
              <ListIcon
                as={MdCheckCircle}
                color={colorMode === "light" ? "blue.500" : "blue.200"}
              />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>

          <Button isFullWidth colorScheme="blue" mt={5} leftIcon={<BsCheck />}>
            Contratar
          </Button>
        </Box>
      </Box>
    </Carousel>
  );
};

export default CarouselApp;
