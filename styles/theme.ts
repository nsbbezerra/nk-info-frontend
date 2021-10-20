import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  breakpoints: ["30em", "48em", "52em", "62em", "80em"],
  fonts: {
    body: "Roboto Condensed, sans-serif",
    heading: "Oswald, sans-serif",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    ...theme.colors,
    blue: {
      100: "#bdcae6",
      200: "#9bb0da",
      300: "#7797cd",
      400: "#4f7fc1",
      500: "#0468b4",
      600: "#155693",
      700: "#194574",
      800: "#193456",
      900: "#16253a",
    },
  },
  components: {
    Button: {
      baseStyle: { _focus: { boxShadow: "none" }, rounded: "full" },
    },
    CloseButton: {
      baseStyle: { _focus: { boxShadow: "none" } },
    },
    Checkbox: {
      baseStyle: { control: { _focus: { boxShadow: "none" } } },
    },
    Radio: {
      baseStyle: { control: { _focus: { boxShadow: "none" } } },
    },
    Menu: {
      baseStyle: {
        list: {
          rounded: "xl",
          shadow: "lg",
          pt: 2,
          pb: 2,
          pl: 1,
          pr: 1,
        },
        item: {
          _active: { bg: "blue.500", color: "white" },
          _hover: { bg: "blue.500", color: "white" },
          _focus: { bg: "blue.500", color: "white" },
          rounded: "full",
        },
      },
    },
  },
});

export { customTheme };
