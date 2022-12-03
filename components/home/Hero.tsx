import { Box, Heading, Text, Stack, Flex, Container } from "@chakra-ui/react";
import Image from "next/image";
import { Button, Navbar } from "../commons";
import editor from "../../public/editor.png";
import {
    Link as ScrollLink,
} from "react-scroll";

export const Hero = () => {
    return (
        <Box bg="secondary.100" position="relative">
            <Navbar />
            <Container maxW="container.xl" >
                <Flex flexDirection="column" justifyContent="space-between" minH="100vh" >
                    <Stack
                        direction={{ base: "column-reverse", md: "row" }}
                        justifyContent={{ base: "center", md: "center" }}
                        flex={"1"}
                        pt={{ base: "0", md: "36" }}
                    >
                        <Flex direction="column" alignItems="center" textAlign="center" position="relative" zIndex="10" >
                            <Heading
                                fontSize="3xl"
                                fontWeight="semibold"
                                mb="3"
                                color="black.100">Learn From Industry <Box as="span" color="brand.100">Professionals!</Box>
                            </Heading>
                            <Text mb="8" maxW="500px" textAlign="center">
                                Magitech adalah platform pembelajaran Web, Mobile & Backend Development yang diajarkan oleh mentor dengan pengalaman industri
                            </Text>
                            <ScrollLink to="learningPath" smooth={true} duration={500}>
                                <Button>View Learning Path</Button>
                            </ScrollLink>
                        </Flex>
                    </Stack>
                    <Box position="relative" zIndex="5" visibility={{base:"hidden", sm:"initial"}}>
                        <Box mx="auto" w="100%" maxW={{ base: "100%", md: "65%" }}>
                            <Image
                                src={editor}
                                placeholder="blur"
                                alt="editor"
                            />
                        </Box>
                    </Box>
                </Flex>
            </Container>
            <Box position="absolute" w="60px" h="60px" borderRadius="50%"  top={{ base:"80%", sm:"30%"}} right="15%" bg="brand.200" />
            <Box position="absolute" w="70px" h="70px" borderRadius="50%" top="60%" right="10%" bg="brand.400" />
            <Box position="absolute" w="55px" h="55px" borderRadius="50%" top={{ base:"80%", sm:"40%"}} left="15%" bg="brand.300" />
            <Box position="absolute" w="45px" h="45px" borderRadius="50%" top={{ base:"65%", sm:"70%"}} left="5%" bg="brand.100" />
        </Box>
    );
};