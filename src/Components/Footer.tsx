import { Stack, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";

const PREFIX = "Footer";
const classes = {
    social: `${PREFIX}-social`,
    company: `${PREFIX}-company`,
};

const Root = styled(Stack)(({ theme }) => ({
    background: theme.palette.background.default,
    padding: theme.spacing(5, 0),
    color: theme.palette.primary.main,
    borderTop: `2px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[5],
    [`& .${classes.social}`]: {
        display: "flex",
        flexWrap: "wrap",
        width: 40,
        height: 40,
        background: theme.palette.divider,
        borderRadius: "50%",
        "& a": {
            color: theme.palette.primary.main,
            fontSize: 22,
            display: "flex"
            // "&:hover": {
            //     background: theme.palette.primary.main,
            //     color: theme.palette.common.white,
            // },
        },
    },
    [`& .${classes.company}`]: {
        color: theme.palette.text.primary
    },
}));

// const socialIcons: { [key: string]: JSX.Element } = {
//     facebook: <FaFacebookF />,
//     linkedin: <FaLinkedinIn />,
//     instagram: <FaInstagram />,
//     whatsapp: <FaWhatsapp />,
//     tiktok: <FaTiktok />,
//     phone: <FaPhone />,
//     youtube: <FaYoutube />,
//     slack: <FaSlack />,
// };

const Footer = () => {
    return (
        <Root alignItems={"center"} spacing={2}>
            <img
                src={"/logo.webp"}
                alt="meditech egypt logo"
                height={120}
                srcSet={"/logo.webp"}
            />
            <Typography variant="h5">

            </Typography>
            {/* <Stack direction={"row"} spacing={2} flexWrap={"wrap"} useFlexGap>
                {websiteData.socialLinks.map((link) => {
                    const Icon = socialIcons[link.name];
                    return (
                        <Stack justifyContent={"center"} alignItems={"center"} key={link.name} className={classes.social}>
                            <a rel="noopener noreferrer" href={link.link} target="_blank">
                                {Icon}
                            </a>
                        </Stack>
                    );
                })}
            </Stack> */}
            <Typography variant='body1' fontSize={"20px"}>
                {/* <FaRegCopyright /> */}
                {" "}
                {new Date().getFullYear()}
                {" "}
                {"powered by "}
                {" "}
                <a className={classes.company} href='https://mountain-egy.site/' rel="noopener noreferrer" target="_blank">{"mountain"}</a>
            </Typography>
        </Root>
    );
};

export default Footer;
