import { Breadcrumbs, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import { useTranslation } from "react-i18next";

const PREFIX = "BreadCrumb";
const classes = {
    activeLink: `${PREFIX}-activeLink`,
};

const Root = styled(Stack)(({ theme }) => ({
    background: theme.palette.background.paper,
    paddingTop: "70px",
    height: 250,
    [`& .${classes.activeLink}`]: {
        color: theme.palette.text.secondary,
        fontSize: "1.1rem",
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "capitalize",
        [`&:hover`]: {
            textDecoration: "underline",
        },
    },
}));

interface inputProps {
    pageLink: string;
    prevLink?: string;
}

const BreadCrumb = (props: inputProps) => {
    const { pageLink, prevLink } = props;
    const { t } = useTranslation();
    return (
        <Root justifyContent={"center"} alignItems={"center"}>
            <Breadcrumbs aria-label="breadcrumb" >
                <Link
                    to={"/"}
                    className={classes.activeLink}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    {t("home")}
                </Link>
                {prevLink && <Link to={`/${prevLink}`} className={classes.activeLink}>
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    {prevLink}
                </Link>}
                <Typography
                    sx={{ display: 'flex', alignItems: 'center' }}
                    fontSize={"1.1rem"}
                    color="text.primary"
                    textTransform="capitalize"
                >
                    <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    {pageLink}
                </Typography>
            </Breadcrumbs>
        </Root>
    )
}

export default BreadCrumb
