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
                            <Text>Kamu akan diajari langsung oleh mentor-mentor yang expert di bidangnya dengan pengalaman industri</Text>
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
                            <Text>Selain mengajar, mentor kamu akan me-monitor progress kamu dan membimbing kamu agar kamu bisa mencapai goals pembelajaran kamu</Text>
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
                            <Text>Di Magitech kita percaya dengan Work Hard, Play Hard. Dengan komunitas murid di Magitech kamu dapat bermain, belajar dan bertemu dengan murid-murid lainnya.</Text>
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
                            <Text>Kami percaya mengejar ilmu dan passion kamu tidak harus memerlukan biaya yang mahal.</Text>
                        </Box>
                    </Flex>
                </Box>
            </SimpleGrid>
        </Container>
    )
}