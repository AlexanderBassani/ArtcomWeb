import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Open Sans",
    body: "Poppins",
  },
  colors: {
    yellow: {
      "700": "#f4b328",
      "800": "#C2880A",
    },
    white: "#FFFFFF",
    black: "#000000",
    isabelline: "#FFFFFF", //"#EDE9E6",
  },
  styles: {
    global: {
      body: {
        bg: "isabelline",
        color: "black",
      },
    },
  },
});
