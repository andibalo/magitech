import { Heading, Flex, Box, Text, Icon } from "@chakra-ui/react"
import { MdQueryBuilder, MdVideocam, MdShowChart } from 'react-icons/md'
import { Button } from "../../commons"

interface TimelineRowProps {
    isEnd?: boolean
    isStart?: boolean
    data?: any
}
export const TimelineRow = ({ isEnd = false, isStart = false }: TimelineRowProps) => {


    if (isStart) {
        return (
            <Flex alignItems="center">
                <Box flex="1" p="5" />
                <Flex justifyContent="center" flex="1" position="relative">
                    <Flex w="35px" h="35px" position="absolute" top="0%" left="50%" transform="translateY(-50%) translateX(-50%)" zIndex="2" bg="brand.100" borderRadius="50%" p="3" />
                    <Box h="100px" w="3px" bg="brand.100" />
                </Flex>
                <Box flex="1" />
            </Flex>
        )
    }

    if (isEnd) {
        return (
            <Flex alignItems="center">
                <Box flex="1" p="5" />
                <Flex justifyContent="center" flex="1" position="relative">
                    <Flex w="35px" h="35px" position="absolute" top="100%" left="50%" transform="translateY(-50%) translateX(-50%)" zIndex="2" bg="brand.100" borderRadius="50%" p="3" />
                    <Box h="100px" w="3px" bg="brand.100" />
                </Flex>
                <Box flex="1" />
            </Flex>
        )
    }

    return (
        <Flex alignItems="center">
            <Box boxShadow="lg" p="5" borderRadius="lg" flex="1">
                <Heading mb="3" fontWeight="semibold" color="black.100" fontSize="lg" as="h5">Programming 101 with Javascript</Heading>
                <Flex alignItems="center" justifyContent="space-between" mb="5">
                    <Flex alignItems="center" justifyContent="space-between">
                        <Icon as={MdQueryBuilder} w={5} h={5} mr="1" />
                        <Text fontSize="sm" >6 Pertemuan</Text>
                    </Flex>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Icon as={MdVideocam} w={5} h={5} mr="1" />
                        <Text fontSize="sm" >6 Pertemuan</Text>
                    </Flex>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Icon as={MdShowChart} w={5} h={5} mr="1" />
                        <Text fontSize="sm" >6 Pertemuan</Text>
                    </Flex>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">Rp. 750.000</Text>
                    <Button btnType="ghost">View Syllabus</Button>
                </Flex>
            </Box>
            <Flex justifyContent="center" flex="1" position="relative">
                <Flex w="35px" h="35px" position="absolute" top="50%" left="50%" transform="translateY(-50%) translateX(-50%)" zIndex="2" justifyContent="center" alignItems="center" bg="brand.100" borderRadius="50%" p="3" >
                    <Text fontWeight="medium" color="white">1</Text>
                </Flex>
                <Box h="250px" w="3px" bg="brand.100" />
            </Flex>
            <Box flex="1">
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.
                </Text>
            </Box>
        </Flex>
    )
}