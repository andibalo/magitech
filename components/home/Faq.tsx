import {
    Container, Box, Flex, Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"
import { Button } from "../commons";


export const Faq = () => {

    return (
        <Container maxW="container.xl" py="20">
            <Flex flexDirection={{ base: "column-reverse", md: "row" }}>
                <Box flex="0.4" pr={{ base: "0", md: "5" }}>
                    <Flex h="300px" bg="brand.500" borderRadius="xl" justifyContent="center" alignItems="center" >
                        <Box>
                            <Text color="white" fontWeight="medium" fontSize="2xl" mb="3">Consult With Us!</Text>
                            <Flex justifyContent="center">
                                <Button>Contact Us</Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box flex="0.6" mb={{ base: "10", md: "0", }}>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Section 1 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        Section 2 title
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
        </Container>
    )
}