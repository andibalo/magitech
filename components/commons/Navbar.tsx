import { Flex, Container, Box } from "@chakra-ui/react";
import { Logo } from "./index";

export const Navbar = () => {

    return (
        <Box
            position="absolute"
            zIndex="9"
            top="0"
            w="full"
            py="5">
            <Container maxW="container.xl">
                <Flex alignItems="center">
                    <Logo />
                </Flex>
            </Container>
        </Box>
    );
};