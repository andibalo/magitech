import {
    Container, Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Box, Flex, Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react"
import { useState } from "react"
import { BACKEND_DEVELOPER_LEARNING_PATH, WEB_DEVELOPER_LEARNING_PATH, MOBILE_DEVELOPER_LEARNING_PATH } from "../../../data/learningPath"
import { Timeline } from "./Timeline"
import { Element } from "react-scroll";

export const LearningPath = () => {
    const [modules, setModules] = useState<CourseModule[]>([])
    const [moduleTitle, setModuleTitle] = useState<string>("")
    const [tabIndex, setTabIndex] = useState(0)
    const { isOpen, onOpen, onClose } = useDisclosure()


    const onClickViewSyllabus = (data: CourseModule[], moduleTitle: string) => {
        setModules(data)
        setModuleTitle(moduleTitle)
        onOpen()
    }

    return (
        <Element name="learningPath">
            <Container maxW="container.xl" py="20" >
                <Heading fontWeight="semibold" mb="16" color="black.100" fontSize="2xl" as="h3" textAlign={"center"}>Our Learning Paths</Heading>
                <Tabs isFitted onChange={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab fontWeight="medium" fontSize={{ base: "md", md: "xl" }} _selected={{ color: 'brand.100', borderColor: 'brand.100' }}>Web Developer</Tab>
                        <Tab fontWeight="medium" fontSize={{ base: "md", md: "xl" }} _selected={{ color: 'brand.300', borderColor: 'brand.300' }}>Mobile Developer</Tab>
                        <Tab fontWeight="medium" fontSize={{ base: "md", md: "xl" }} _selected={{ color: 'brand.400', borderColor: 'brand.400' }}>Backend Developer</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel pt={{ base: "16", md: "28" }}>
                            <Timeline tabIndex={tabIndex} data={WEB_DEVELOPER_LEARNING_PATH} onViewSyllabusClick={onClickViewSyllabus} />
                        </TabPanel>
                        <TabPanel pt={{ base: "16", md: "28" }}>
                            <Timeline tabIndex={tabIndex} data={MOBILE_DEVELOPER_LEARNING_PATH} onViewSyllabusClick={onClickViewSyllabus} />
                        </TabPanel>
                        <TabPanel pt={{ base: "16", md: "28" }}>
                            <Timeline tabIndex={tabIndex} data={BACKEND_DEVELOPER_LEARNING_PATH} onViewSyllabusClick={onClickViewSyllabus} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered  scrollBehavior="inside" >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{moduleTitle}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {
                                modules.length > 0 && modules.map((module, index) => {
                                    return (
                                        <Flex key={module.title} mb="5">
                                            <Text w="30px">{index + 1}.</Text>
                                            <Box>
                                                <Text fontWeight="semibold">{module.title}</Text>
                                                <Text>{module.description}</Text>
                                            </Box>
                                        </Flex>
                                    )
                                })
                            }
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Container>
        </Element>

    )
}