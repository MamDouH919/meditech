import { Box, Container, Grid2 as Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SectionStyle } from '../../Styles'
import SectionTitle from '../SectionTitle'
import leader1 from "../../assets/profilePic.jpeg"
import { Remove } from '@mui/icons-material'



const ImageWrapper = styled(Box)(({ theme }) => ({
    height: 450,
    width: 350,
    border: `8px solid ${theme.palette.primary.main}`,
    position: "relative",
}))

const BoxStyle = styled(Box)(() => ({
    position: "absolute",
    top: -15,
    right: 15,
    height: "100%",
    width: "100%",
    "& img": {
        objectFit: "cover",
    }
}))

const ListItemStyle = styled(ListItem)(({ theme }) => ({
    padding: theme.spacing(1, 0),
    "& .MuiListItemIcon-root": {
        minWidth: "30px",
    },
}))



const Leader = () => {
    return (
        <SectionStyle id="leader" bgcolor={"background.paper"}>
            <SectionTitle sectionTitle='Leader' />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack lineHeight={1} spacing={2}>
                            <Stack>
                                <Typography variant="h2" fontSize={35} color='secondary.main' fontWeight={"bold"}>
                                    Dr/ Sobhy Aboelkassem
                                </Typography>
                                <Typography fontSize={16} color='text.secondary'>Chairman & Founder of Meditech Egypt</Typography>
                            </Stack>
                            <Typography variant="body1" fontWeight={"bold"}>
                                Chairman of the Board of Directors of ProLab Medical Laboratories Group
                                Director and Board Member of Beta Imaging Centers
                                Branch Manager and Board Member of Arab Clinic Hospitals.
                            </Typography>

                            <List>
                                <ListItemStyle>
                                    <ListItemIcon>
                                        <Remove />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Graduated in 2004, with over 20 years of experience in the medical field and Marketing Management."
                                    />
                                </ListItemStyle>
                                <ListItemStyle>
                                    <ListItemIcon>
                                        <Remove />
                                    </ListItemIcon>
                                    <ListItemText primary="Holds an MBA from the Arab Academy for Science, Technology, and Maritime Transport." />
                                </ListItemStyle>
                                <ListItemStyle>
                                    <ListItemIcon>
                                        <Remove />
                                    </ListItemIcon>
                                    <ListItemText primary="Diploma in Medical Analysis." />
                                </ListItemStyle>
                                <ListItemStyle>
                                    <ListItemIcon>
                                        <Remove />
                                    </ListItemIcon>
                                    <ListItemText primary="Diploma in Hospital Management." />
                                </ListItemStyle>
                                <ListItemStyle>
                                    <ListItemIcon>
                                        <Remove />
                                    </ListItemIcon>
                                    <ListItemText primary="Chairman of the Board of Directors of ProLab Medical Laboratories Group" />
                                </ListItemStyle>
                            </List>
                            <Typography variant="body1" fontWeight={"bold"}>
                                My experience spans management, marketing, and business development in the healthcare sector, enhancing my ability to deliver effective and impactful market strategies.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid
                        size={{ xs: 12, md: 6 }}
                        display={"flex"}
                        justifyContent={{ md: "flex-end", xs: "center" }}
                    >
                        <ImageWrapper>
                            <BoxStyle height={450} width={350}>
                                <img src={leader1} alt={"leader"} height={"100%"} width={"100%"} />
                            </BoxStyle>
                        </ImageWrapper>
                    </Grid>

                </Grid>
            </Container>
        </SectionStyle>
    )
}

export default Leader