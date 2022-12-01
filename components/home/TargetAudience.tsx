import { Container, Box, Heading, Flex, Text } from "@chakra-ui/react"
import Image from "next/image";
import uniStudent from "../../public/uni-student.png";
import smaStudent from "../../public/sma-student.png";
import careerSwitcher from "../../public/career-switcher.png";

export const TargetAudience = () => {

    return (
        <Container maxW="container.xl" py="20" >
            <Heading fontWeight="semibold" mb="16" color="black.100" fontSize="2xl" as="h3" textAlign={"center"}>Who Is Magitech For?</Heading>
            <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="space-between" px="10">
                <Flex flexDirection="column" alignItems="center" mb={{ base: "20", md: "0" }}>
                    <Box mb="5" w="100%" maxW={{ base: "200px" }}>
                        <Image
                            src={smaStudent}
                            placeholder="blur"
                            alt="Sma Student Avatar"
                        />
                    </Box>
                    <Text textAlign="center" fontWeight="medium" fontSize="xl" >SMP/SMA Students</Text>
                </Flex>
                <Flex flexDirection="column" alignItems="center" mb={{ base: "20", md: "0" }}>
                    <Box mb="5" w="100%" maxW={{ base: "200px" }}>
                        <Image
                            src={uniStudent}
                            placeholder="blur"
                            alt="University Student Avatar"
                        />
                    </Box>
                    <Text textAlign="center" fontWeight="medium" fontSize="xl">University Students</Text>
                </Flex>
                <Flex flexDirection="column" alignItems="center" >
                    <Box mb="5" w="100%" maxW={{ base: "200px" }}>
                        <Image
                            src={careerSwitcher}
                            placeholder="blur"
                            alt="Career Switcher Avatar"
                        />
                    </Box>
                    <Text textAlign="center" fontWeight="medium" fontSize="xl" >Career Switchers</Text>
                </Flex>
            </Flex>
        </Container>
    )
}