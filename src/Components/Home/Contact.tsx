import { Avatar, Box, Button, Container, Grid2 as Grid, Paper, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import contactUsImage from "../../assets/contact/contact.png";
import { styled } from "@mui/material/styles";
import SectionTitle from '../SectionTitle';
import ControlMUITextField from '../MUI/TextFieldControl';
import { send } from 'emailjs-com';
import { toast } from 'sonner';
import { useState } from 'react';
import { Email, Phone, StayCurrentPortrait } from '@mui/icons-material';

const PREFIX = "Contact";

const classes = {
    bannerBack: `${PREFIX}-bannerBack`,
    content: `${PREFIX}-content`,
    qrLink: `${PREFIX}-qrLink`,
};

const LinkStyle = styled("a")(() => ({
    margin: 0,
    fontSize: 20,
    textDecoration: "none",
}))

const AvatarStyle = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
}))

const Root = styled(Box)(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    background: `url(${contactUsImage}) no-repeat top / cover`,
    backgroundAttachment: "fixed",
    "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `#f7f7f7c4`,
    },
    [`& .${classes.content}`]: {
        paddingTop: theme.spacing(10),
        background: theme.palette.divider,
    },
    [`& .${classes.bannerBack}`]: {
        [`& svg`]: {
            [`& path`]: {
                fill: theme.palette.divider,
            },
        },
    },
    [`& .${classes.qrLink}`]: {
        color: theme.palette.primary.main,
        margin: 0,
        fontSize: 20,
        textDecoration: "none",
        [`&:hover`]: {
            textDecoration: "underline",
        },
    },
}));

const Contact = () => {
    const { t } = useTranslation()
    const { control, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)

    const onSubmit = (formData: any) => {
        setLoading(true)
        console.log(formData);
        send(
            'service_a2qhbkf',
            'template_hyntnwg',
            formData,
            '3MRu-SjkSc1Mx-NWK'
        )
            .then(() => {
                // setSendBefore("ok")
                setLoading(false)
                localStorage.setItem("sendBefore", "ok")
                toast.success("Your Request Successfully Sent")
            })
            .catch(() => {
                setLoading(false)
                toast.error("Something went wrong")
            });
    }

    return (
        <Root
            id={"contact"}
            py={5}
        >
            <Stack position={"relative"} zIndex={1}>
                <SectionTitle
                    sectionTitle={"Contact Us"}
                    subSectionTitle={"we are here to help you"}
                />
                <Container maxWidth={'md'}>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Box width={"100%"}>
                            <Grid container spacing={2} m={0} alignItems={"center"} justifyContent={"center"} >
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <ControlMUITextField
                                        name="firstName"
                                        label={t("First Name")}
                                        rules={{ required: t("fieldIsRequired") }}
                                        fullWidth
                                        control={control}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <ControlMUITextField
                                        name="lastName"
                                        label={t("Last Name")}
                                        rules={{ required: t("fieldIsRequired") }}
                                        fullWidth
                                        control={control}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <ControlMUITextField
                                        name="email"
                                        label={t("Email")}
                                        rules={{ required: t("fieldIsRequired") }}
                                        fullWidth
                                        control={control}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <ControlMUITextField
                                        name="mobile"
                                        label={t("Mobile")}
                                        rules={{ required: t("fieldIsRequired") }}
                                        fullWidth
                                        control={control}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <ControlMUITextField
                                        name="message"
                                        rules={{ required: t("fieldIsRequired") }}
                                        label={t("Message")}
                                        control={control}
                                        rows={3}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <Button loading={loading} type='submit' variant='contained' fullWidth>{t("send")}</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                    <Grid container spacing={2} mt={5}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <LinkStyle href='tel:+0226839327' target='_blank'>
                                <Stack component={Paper} px={2} py={1} direction={"row"} spacing={2}>
                                    <AvatarStyle>
                                        <Phone />
                                    </AvatarStyle>
                                    <Stack>
                                        <Typography color='primary'>Phone</Typography>
                                        <Typography color='text.secondary'>0226839327</Typography>
                                    </Stack>
                                </Stack>
                            </LinkStyle>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <LinkStyle href='tel:+201032464406' target='_blank'>
                                <Stack component={Paper} px={2} py={1} direction={"row"} spacing={2}>
                                    <AvatarStyle>
                                        <StayCurrentPortrait />
                                    </AvatarStyle>
                                    <Stack>
                                        <Typography color='primary'>Mobile</Typography>
                                        <Typography color='text.secondary'>+201032464406</Typography>
                                    </Stack>
                                </Stack>
                            </LinkStyle>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <LinkStyle href='mailto:unitechegy@gmail.com' target='_blank'>
                                <Stack component={Paper} px={2} py={1} direction={"row"} spacing={2}>
                                    <AvatarStyle>
                                        <Email />
                                    </AvatarStyle>
                                    <Stack>
                                        <Typography color='primary'>Email</Typography>
                                        <Typography color='text.secondary'>unitechegy@gmail.com</Typography>
                                    </Stack>
                                </Stack>
                            </LinkStyle>
                        </Grid>
                    </Grid>
                </Container>
            </Stack>
        </Root>
    )
}

export default Contact