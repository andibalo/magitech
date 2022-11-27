import { Box, Heading, Text, Stack, Flex, Container } from "@chakra-ui/react";
import Image from "next/image";
import { Button, Navbar } from "../commons";
import editor from "../../public/editor.png";

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
                    pt="40"
                >
                    <Flex direction="column" alignItems="center" textAlign="center">
                        <Heading
                            fontSize="3xl"
                            fontWeight="semibold"
                            mb="3"
                            color="black.100">Learn From Industry <Box as="span" color="brand.100">Professionals!</Box>
                        </Heading>
                        <Text mb="8" maxW="500px" textAlign="center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </Text>
                        <Button>View Learning Path</Button>
                    </Flex>
                </Stack>
            </Container>
            <Box w="100%" position="absolute" bottom="0" left="50%" transform="translateX(-50%)" maxW={{ base: "35px", md: "1000px" }}>
                <Image
                    src={editor}
                    placeholder="blur"
                    alt="editor"
                />
            </Box>
        </Box>
    );
};