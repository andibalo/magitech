import { Container, Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from "@chakra-ui/react"
import { WEB_DEVELOPER_LEARNING_PATH } from "../../../data/learningPath"
import { Timeline } from "./Timeline"

export const LearningPath = () => {

    return (
        <Container maxW="container.xl" py="20" >
            <Heading fontWeight="semibold" mb="16" color="black.100" fontSize="2xl" as="h3" textAlign={"center"}>Our Learning Paths</Heading>
            <Tabs isFitted>
                <TabList>
                    <Tab fontWeight="medium" fontSize={{ base: "md", md: "xl" }} _selected={{ color: 'brand.100', borderColor: 'brand.100' }}>Web Developer</Tab>
                    <Tab fontWeight="medium" fontSize={{ base: "md", md: "xl" }} _selected={{ color: 'brand.300', borderColor: 'brand.300' }}>Mobile Developer</Tab>
                    <Tab fontWeight="medium" fontSize={{ base: "md", md: "xl" }} _selected={{ color: 'brand.400', borderColor: 'brand.400' }}>Backend Developer</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel pt={{ base: "16", md: "28" }}>
                        <Timeline data={WEB_DEVELOPER_LEARNING_PATH} />
                    </TabPanel>
                    <TabPanel pt={{ base: "16", md: "28" }}>
                        <Timeline data={WEB_DEVELOPER_LEARNING_PATH} />
                    </TabPanel>
                    <TabPanel pt={{ base: "16", md: "28" }}>
                        <Timeline data={WEB_DEVELOPER_LEARNING_PATH} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}