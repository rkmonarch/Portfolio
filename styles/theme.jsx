import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  heading: "syne",
  body: "Inter",
};

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        scrollBehavior: "smooth",
        scrollPadding: "3.9rem",
      },
      "&::-webkit-scrollbar": {
        width: "1",
        borderRadius: "8px",
        backgroundColor: "teansparent",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "5",
        backgroundColor: "white",
      },
    },
  },
  config,
  fonts,
});

export default theme;
