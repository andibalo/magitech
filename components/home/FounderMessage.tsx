import { Container, Box, Heading, Flex, Text, SimpleGrid, Icon } from "@chakra-ui/react"
import { BsLinkedin } from 'react-icons/bs'
import Image from "next/image";
import founder from "../../public/founder.png";


export const FounderMessage = () => {

    return (
        <Container maxW="container.xl" py="20" >
            <Flex alignItems="center">
                <Box flex="0.6">
                    <Box maxW="600px">
                        <Heading mb="5" fontWeight="semibold" color="black.100" fontSize="2xl" as="h3" >
                            Meet Your <Box as="span" color="brand.100">Founder</Box> & <Box as="span" color="brand.400">Mentor!</Box>
                        </Heading>
                        <Text mb="4">
                            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat. “
                        </Text>
                        <Text>
                            Wishing you all the best,
                        </Text>
                        <Text fontWeight="medium">
                            Andi Usman Balo
                        </Text>
                    </Box>
                </Box>
                <Box flex="0.4">
                    <Box>
                        <Box mb="8" mx="auto" w="100%" maxW={{ base: "35px", md: "350px" }}>
                            <Image
                                src={founder}
                                placeholder="blur"
                                alt="founder"
                            />
                        </Box>
                        <Flex flexDirection="column" alignItems="center">
                            <Icon mb="2" as={BsLinkedin} w={6} h={6} />
                            <Heading mb="1" fontWeight="medium" color="black.100" fontSize="lg" as="h5" >Andi Usman Balo</Heading>
                            <Text>Software Engineer at eFishery</Text>
                            <Text>{"(ex-OVO, ex-Ruangguru)"}</Text>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}