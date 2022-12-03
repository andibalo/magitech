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
        title="Belajar Coding dan Development dari Industri Profesional | Magitech"
        description="Magitech adalah platform pembelajaran Web, Mobile & Backend Development yang diajarkan oleh mentor dengan pengalaman industri"
        {...SEOConfig}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
