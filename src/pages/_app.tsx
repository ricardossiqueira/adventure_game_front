import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { theme } from "../styles/theme";
import { queryClient } from "../services/queryClient";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { AnimatedCanvas } from "../components/Background/AnimatedCanvas";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
          <AnimatedCanvas />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
