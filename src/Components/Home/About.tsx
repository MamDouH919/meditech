import { SectionStyle } from '../../Styles'
import SectionTitle from '../SectionTitle'
import { Container, Grid2 as Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useTheme } from '@mui/material'
import Shape from '../Shape';
import { FaRegLightbulb } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { styled } from '@mui/material/styles'
import { Remove } from '@mui/icons-material';

const ListItemStyle = styled(ListItem)(({ theme }) => ({
    padding: theme.spacing(0),
    "& .MuiListItemIcon-root": {
        minWidth: "30px",
    },
}))

const About = () => {
    const theme = useTheme()
    return (
        <SectionStyle id='about'>
            <SectionTitle
                sectionTitle='About'
            />
            <Container maxWidth={"lg"}>
                <Stack alignItems={"center"}>
                    <Typography variant="body1" textAlign={"center"} fontSize={{ md: 18, xs: 13 }} color='text.secondary'>
                        Meditech Egypt - Dr. Sobhy Abou El-Kassem

                        Founded in 2016, Meditech Egypt is a specialized company in the supply and distribution of medical equipment, focusing on cardiac catheterization, vascular products, and urology devices. The company employs 25 experienced professionals, ensuring the provision of globally certified products that meet the highest quality standards.

                        Meditech Egypt collaborates with university hospitals, Ministry of Health hospitals, and private hospitals, including Qasr Al-Aini, Ain Shams University, Cairo University, Alexandria University, Health Insurance hospitals, and educational hospitals.

                        Committed to delivering cutting-edge medical solutions, Meditech Egypt strives to build strong partnerships to support the healthcare sector and ensure exceptional medical care.
                    </Typography>
                </Stack>
                <Stack mt={5}>
                    <Grid container spacing={2}>
                        <Grid size={{ sm: 6, xs: 12 }}>
                            <Stack spacing={1} alignItems={"center"}>
                                <Shape bgcolor={theme.palette.error.main}>
                                    <GiTrophyCup />
                                </Shape>
                                <Typography variant="h6" fontWeight={"bold"} fontSize={20}>
                                    Our Mission
                                </Typography>
                                <Typography variant="body1" fontSize={15} textAlign={"center"} color='text.secondary' px={5}>
                                    At Meditech Egypt, our mission is to enhance healthcare by providing high-quality, globally certified medical equipment.
                                    We are committed to delivering innovative solutions in cardiac catheterization,
                                    vascular products, and urology devices to improve patient outcomes.
                                    Through strong partnerships with healthcare institutions,
                                    we ensure accessibility to the latest medical technologies,
                                    empowering medical professionals with the tools they need to save lives.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ sm: 6, xs: 12 }}>
                            <Stack spacing={1} alignItems={"center"}>
                                <Shape bgcolor={theme.palette.info.main}>
                                    <FaRegLightbulb />
                                </Shape>
                                <Typography variant="h6" fontWeight={"bold"} fontSize={20}>
                                    Our Vision
                                </Typography>
                                <Typography variant="body1" fontSize={15} textAlign={"center"} color='text.secondary' px={5}>
                                    Our vision is to become a leading medical equipment provider in Egypt and beyond,
                                    setting new standards in healthcare excellence. We aspire to expand our reach,
                                    continuously innovate, and contribute to the advancement of medical care by
                                    offering state-of-the-art solutions that enhance patient well-being.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Stack spacing={1} alignItems={"center"}>
                                <Shape bgcolor={theme.palette.success.main}>
                                    <FaEye />
                                </Shape>
                                <Typography variant="h6" fontWeight={"bold"} fontSize={20}>
                                    Our Values
                                </Typography>

                                <Stack fontSize={15}>
                                    <List>
                                        <ListItemStyle>
                                            <ListItemIcon>
                                                <Remove />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="Quality & Excellence - We are dedicated to supplying only the highest quality medical equipment that meets international standards."
                                            />
                                        </ListItemStyle>
                                        <ListItemStyle>
                                            <ListItemIcon>
                                                <Remove />
                                            </ListItemIcon>
                                            <ListItemText primary="Innovation - We embrace the latest advancements in medical technology to bring cutting-edge solutions to the healthcare sector." />
                                        </ListItemStyle>
                                        <ListItemStyle>
                                            <ListItemIcon>
                                                <Remove />
                                            </ListItemIcon>
                                            <ListItemText primary="Integrity & Trust - We operate with transparency, honesty, and ethical business practices in all our partnerships." />
                                        </ListItemStyle>
                                        <ListItemStyle>
                                            <ListItemIcon>
                                                <Remove />
                                            </ListItemIcon>
                                            <ListItemText primary="Commitment to Healthcare - We strive to improve patient care by supporting healthcare professionals with reliable and effective medical products." />
                                        </ListItemStyle>
                                        <ListItemStyle>
                                            <ListItemIcon>
                                                <Remove />
                                            </ListItemIcon>
                                            <ListItemText primary="Collaboration - We build strong relationships with hospitals, healthcare providers, and industry leaders to foster a healthier future." />
                                        </ListItemStyle>
                                    </List>
                                </Stack>

                            </Stack>
                        </Grid>

                    </Grid>

                </Stack>
            </Container>
        </SectionStyle>
    )
}

export default About