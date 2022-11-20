import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import SEOConfig from "../next-seo.config.js";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title="Play Truth or Truth game with your friends! | Rebond"
        description="Rebond adalah permainan truth or truth yang menyediakan 100+ pertanyaan dan topic biar waktu ngobrol kamu dengan teman, keluarga dan pacar (ato calon pacar) lebih asik! Dan kamu bisa mainkan sekarang online dan secara gratis!"
        {...SEOConfig}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
