import { Container, Box, Heading, Flex, Text } from "@chakra-ui/react"
import Image from "next/image";
import techStack from "../../public/tech-stack.png";

export const TechStack = () => {

    return (
        <Box bg="brand.500">
            <Container maxW="container.xl" py="14" >
                <Heading fontWeight="semibold" mb="5" color="white" fontSize="2xl" as="h3" textAlign={"center"}>Technologies You Will Learn</Heading>
                <Flex justifyContent="center">
                    <Box w="100%" maxW={{ base: "35px", md: "550px" }}>
                        <Image
                            src={techStack}
                            placeholder="blur"
                            alt="Tech Stack"
                        />
                    </Box>
                </Flex>
                <Text fontWeight="semibold" color="white" textAlign={"center"}>And many more!</Text>
            </Container>
        </Box>
    )
}