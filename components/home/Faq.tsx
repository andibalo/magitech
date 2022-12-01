import {
    Container, Box, Flex, Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"
import { Button } from "../commons";


export const Faq = () => {

    return (
        <Container maxW="container.xl" py="20">
            <Flex flexDirection={{ base: "column-reverse", md: "row" }} minH="400px">
                <Box flex="0.4" pr={{ base: "0", md: "5" }}>
                    <Flex h="300px" bg="brand.500" borderRadius="xl" justifyContent="center" alignItems="center" >
                        <Box>
                            <Text color="white" fontWeight="medium" fontSize="2xl" mb="3">Konsultasi dengan kami!</Text>
                            <Flex justifyContent="center">
                                <Button btnType="solidSecondary" >Kontak Kami</Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box flex="0.6" mb={{ base: "10", md: "0", }}>
                    <Accordion allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontWeight="medium" _expanded={{ color: 'white', bg: "brand.100" }}>
                                    <Box flex='1' textAlign='left'>
                                        Saya tidak punya pengetahuan IT sama sekali, apakah saya bisa ikut serta ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Tentu saja, kamu akan di bimbing dari awal dari nol hingga kamu paham apa yang diajarkan di Magitech.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton fontWeight="medium" _expanded={{ color: 'white', bg: "brand.100" }}>
                                    <Box flex='1' textAlign='left'>
                                        Berapakah spek laptop yang baik untuk mengikuti kelas di Magitech ?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Karena kita akan banyak praktek maka kamu sebaiknya memiliki laptop dengan minimal processor setara Core I3 dan RAM minimal 4 GB.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontWeight="medium" _expanded={{ color: 'white', bg: "brand.100" }}>
                                    <Box flex='1' textAlign='left'>
                                        Bagaimana sistem pembelajaran di Magitech?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Kami akan mengadakan kelas via Zoom Meeting dan semua akan di record agar nantinya bisa kamu ulangi lagi.
                                Kelas berlangsung selama 2 jam dan setelah kelas kamu akan mendapatkan sesi 1-on-1 mentoring 1 jam gratis untuk bertanya tentang materi atau hal lain.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontWeight="medium" _expanded={{ color: 'white', bg: "brand.100" }}>
                                    <Box flex='1' textAlign='left'>
                                        Berapa kali dalam seminggu kelas diadakan?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Kamu bisa mengambil 1x atau 2x sesi kelas dalam seminggu.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontWeight="medium" _expanded={{ color: 'white', bg: "brand.100" }}>
                                    <Box flex='1' textAlign='left'>
                                        Jam berapa kelas diadakan?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Di weekday kelas akan diadakan pada jam 17.00 - 20.00 WIB dan di weekend 09.00 - 17.00 WIB. Kamu dapat memilih jadwal kelas kamu sebelum mengambil kelas.
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <h2>
                                <AccordionButton fontWeight="medium" _expanded={{ color: 'white', bg: "brand.100" }}>
                                    <Box flex='1' textAlign='left'>
                                        Benefit apa saja yang saya dapat ketika mengikuti kelas?
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Kamu akan mendapatkan sertifikat, private learning group dan dapat bergabung dengan komunitas murid di Magitech.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Flex>
        </Container>
    )
}