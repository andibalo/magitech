import { Flex, Box, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import Image from 'next/image'
import logo from "../../public/logo.png";

export const Logo = () => {
    return (
        <NextLink href={'/'} passHref>
            <Link _hover={{ textDecoration: "none" }}>
                <Flex alignItems="center">
                    <Box w="100%" maxW={{ base: "35px", md: "150px" }}>
                        <Image
                            src={logo}
                            placeholder="blur"
                            alt="logo"
                        />
                    </Box>
                </Flex>
            </Link>
        </NextLink>
    );
};