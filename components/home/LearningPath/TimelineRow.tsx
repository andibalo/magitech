import { Heading, Flex, Box, Text, Icon } from "@chakra-ui/react"
import { MdQueryBuilder, MdVideocam, MdShowChart } from 'react-icons/md'
import { formatRupiah } from "../../../utils/utils"
import { Button } from "../../commons"

interface TimelineRowProps {
    isEnd?: boolean
    isStart?: boolean
    data?: CourseInfo
    index?: number
    onViewSyllabusClick: (data: CourseModule[], moduleTitle: string) => void
}

export const TimelineRow = ({ isEnd = false, isStart = false, data, index, onViewSyllabusClick }: TimelineRowProps) => {

    if (isStart) {
        return (
            <Flex alignItems="center" >
                <Box flex="1" p={{ base: "0", md: "5" }} />
                <Flex justifyContent="center" flex="1" position="relative">
                    <Flex w="35px" h="35px" position="absolute" top="0%" left="50%" transform="translateY(-50%) translateX(-50%)" zIndex="2" bg="brand.100" borderRadius="50%" p="3" />
                    <Box h="50px" w="3px" bg="brand.100" />
                </Flex>
                <Box flex="1" />
            </Flex>
        )
    }

    if (isEnd) {
        return (
            <Flex alignItems="center">
                <Box flex="1" p={{ base: "0", md: "5" }} />
                <Flex justifyContent="center" flex="1" position="relative">
                    <Flex w="35px" h="35px" position="absolute" top="100%" left="50%" transform="translateY(-50%) translateX(-50%)" zIndex="2" bg="brand.100" borderRadius="50%" p="3" />
                    <Box h="100px" w="3px" bg="brand.100" />
                </Flex>
                <Box flex="1" />
            </Flex>
        )
    }


    const { title, totalHours, totalSessions, description, modules, price } = data!


    return (
        <Flex alignItems="center" flexDirection={{ base: "column", md: "row" }}>
            <Box w="100%" boxShadow="lg" p="5" borderRadius="lg" flex="1" order={{ base: "1", md: "0" }}>
                <Heading mb="3" fontWeight="semibold" color="black.100" fontSize="lg" as="h5">{title}</Heading>
                <Flex alignItems="center" mb="5">
                    <Flex alignItems="center" justifyContent="space-between" mr="4">
                        <Icon as={MdQueryBuilder} w={5} h={5} mr="1" />
                        <Text fontSize="sm" >{totalHours} Jam</Text>
                    </Flex>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Icon as={MdVideocam} w={5} h={5} mr="1" />
                        <Text fontSize="sm" >{totalSessions} Pertemuan</Text>
                    </Flex>

                </Flex>
                <Flex alignItems="center" justifyContent="space-between">
                    <Text fontWeight="medium">{formatRupiah(price)}</Text>
                    <Button btnType="ghost" onClick={() => onViewSyllabusClick(modules, title)} >Lihat Silabus</Button>
                </Flex>
            </Box>
            <Flex justifyContent="center" flex="1" position="relative" >
                <Flex w="35px" h="35px" position="absolute" top="50%" left="50%" transform="translateY(-50%) translateX(-50%)" zIndex="2" justifyContent="center" alignItems="center" bg="brand.100" borderRadius="50%" p="3" >
                    <Text fontWeight="medium" color="white">{index! + 1}</Text>
                </Flex >
                <Box visibility={{ base: "initial", md: "initial" }} h={{ base: "150px", md: "250px" }} mb={{ base: "3", md: "0" }} w="3px" bg="brand.100" />
            </Flex>
            <Box flex="1">
                <Text textAlign={{ base: "center", md: "initial" }} mb={{ base: "5", md: "0" }}>
                    {description}
                </Text>
            </Box>
        </Flex>
    )
}