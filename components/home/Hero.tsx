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
            <Container maxW="container.xl">
                <Stack
                    direction={{ base: "column-reverse", md: "row" }}
                    justifyContent={{ base: "center", md: "center" }}
                    flex={"1"}
                    minH="100vh"
                    pt={{ base: "0", md: "40" }}
                >
                    <Flex direction="column" alignItems="center" textAlign="center" position="relative" zIndex="10" >
                        <Heading
                            fontSize="3xl"
                            fontWeight="semibold"
                            mb="3"
                            color="black.100">Learn From Industry <Box as="span" color="brand.100">Professionals!</Box>
                        </Heading>
                        <Text mb="8" maxW="500px" textAlign="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </Text>
                        <ScrollLink to="learningPath" smooth={true} duration={500}>
                            <Button>View Learning Path</Button>
                        </ScrollLink>
                    </Flex>
                </Stack>
            </Container>
            <Box w="100%" position="absolute" bottom="0" left="50%" transform="translateX(-50%)" maxW={{ base: "60%", md: "55%" }}>
                <Image
                    src={editor}
                    placeholder="blur"
                    alt="editor"
                />
            </Box>
            <Box position="absolute" w="60px" h="60px" borderRadius="50%" top="30%" right="15%" bg="brand.200" />
            <Box position="absolute" w="70px" h="70px" borderRadius="50%" top="60%" right="10%" bg="brand.400" />
            <Box position="absolute" w="55px" h="55px" borderRadius="50%" top="40%" left="15%" bg="brand.300" />
            <Box position="absolute" w="45px" h="45px" borderRadius="50%" top="70%" left="5%" bg="brand.100" />
        </Box>
    );
};