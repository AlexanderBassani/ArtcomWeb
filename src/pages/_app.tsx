import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../styles/fonts";
import { theme } from "../styles/theme";

import { ToastProvider } from "react-toast-notifications";

// Import Swiper styles
import "../styles/globals.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </ChakraProvider>
  );
}

export default MyApp;
