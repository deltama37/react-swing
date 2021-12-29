import { TasksProvider } from "@/contexts/tasks-context";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TasksProvider>
        <Component {...pageProps} />
      </TasksProvider>
    </ChakraProvider>
  );
}

export default MyApp;
