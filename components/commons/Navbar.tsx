import { Flex, Container } from "@chakra-ui/react";
import { Logo } from "./index";

export const Navbar = () => {

    return (
        <Container maxW="container.xl" py="5" >
            <Flex alignItems="center"  >
                <Logo />
            </Flex>
        </Container>
    );
};