import { Flex, Icon } from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai"

export const WaFab = () => {

    return (
        <Flex
            bgColor="#25d366"
            w="50px"
            h="50px"
            justifyContent="center"
            alignItems="center"
            position="fixed"
            bottom={{ base: "30px", md: "50px" }}
            right={{ base: "30px", md: "50px" }}
            borderRadius="50%"
            zIndex="10"
            boxShadow="lg"
            cursor="pointer"
        >
            <Icon as={AiOutlineWhatsApp} w={8} h={8} color="white" />
        </Flex>
    );
};