import { Box, Text, Icon, Flex, Link } from "@chakra-ui/react";
import { BsInstagram } from 'react-icons/bs'

export const Footer = () => {
    return (
        <Box py="10" bg="brand.500">
            <Flex justifyContent="center" mb="1">
                <Link href={""} target="_blank" >
                    <Icon as={BsInstagram} w={5} h={5} color='white' />
                </Link>
            </Flex>
            <Text textAlign={"center"} color="white">
                &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
            </Text>
        </Box>
    );
};