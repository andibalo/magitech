import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        brand: {
            100: "#116CFF",
            200: "#FFC107",
            300: "#F44336",
            400: "#4CAF50",
            500: "#1D2E6C",
        },
        black: {
            100: "#050504"
        },
        light: {
            100: "#ffffff",
            200: "#575757",
            300: "#C2BFBF"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    }
})