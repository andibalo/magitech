import { Container, Box, Heading, Flex, Text, SimpleGrid, Icon } from "@chakra-ui/react"
import { MdPerson, MdPendingActions, MdAttachMoney, MdGroups } from 'react-icons/md'

export const WhyUs = () => {

    return (
        <Container maxW="container.xl" py="20" >
            <Heading fontWeight="semibold" mb="16" color="black.100" fontSize="2xl" as="h3" textAlign={"center"}>Why Us?</Heading>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={14}>
                <Box>
                    <Flex>
                        <Box mr="5">
                            <Flex justifyContent="center" alignItems="center" bg="brand.100" borderRadius="50%" p="3">
                                <Icon as={MdPerson} color="white" w={6} h={6} />
                            </Flex>
                        </Box>
                        <Box>
                            <Heading mb="1" fontWeight="medium" color="black.100" fontSize="xl" as="h5" >Mentor Berpengalaman</Heading>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Flex>
                        <Box mr="5">
                            <Flex justifyContent="center" alignItems="center" bg="brand.300" borderRadius="50%" p="3">
                                <Icon as={MdPendingActions} color="white" w={6} h={6} />
                            </Flex>
                        </Box>
                        <Box>
                            <Heading mb="1" fontWeight="medium" color="black.100" fontSize="xl" as="h5" >Mentoring Aktif</Heading>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Flex>
                        <Box mr="5">
                            <Flex justifyContent="center" alignItems="center" bg="brand.200" borderRadius="50%" p="3">
                                <Icon as={MdGroups} color="white" w={6} h={6} />
                            </Flex>
                        </Box>
                        <Box>
                            <Heading mb="1" fontWeight="medium" color="black.100" fontSize="xl" as="h5" >Komunitas Murid</Heading>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Flex>
                        <Box mr="5">
                            <Flex justifyContent="center" alignItems="center" bg="brand.400" borderRadius="50%" p="3">
                                <Icon as={MdAttachMoney} color="white" w={6} h={6} />
                            </Flex>
                        </Box>
                        <Box>
                            <Heading mb="1" fontWeight="medium" color="black.100" fontSize="xl" as="h5" >Harga Terjangkau</Heading>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.</Text>
                        </Box>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Container>
    )
}