import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { Divider, MenuItem, Stack } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import { styled, useTheme } from "@mui/material/styles";
// import LanguageMenu from './Language';
import { keyframes } from '@mui/system';
// import useWidth, { isWidthDown } from './helperFunctions/useWidth';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const links = [
    {
        "key": "about",
        "name": "about",
        "desc": ""
    },
    {
        "key": "suppliers",
        "name": "suppliers",
        "desc": ""
    },
    {
        "key": "contact",
        "name": "contact",
        "desc": ""
    },
    {
        "key": "gallery",
        "name": "gallery",
        "desc": ""
    },
    {
        "key": "clients",
        "name": "clients",
        "desc": ""
    }
]

// const PREFIX_BOX = "arabicClinic";
// const classesBox = {
//     stickyHeader: `${PREFIX_BOX}-stickyHeader`,
//     animationFade: `${PREFIX_BOX}-animationFade`,
//     activeLink: `${PREFIX_BOX}-activeLink`,
// };

const BoxStyle = styled(Box)(({ theme }) => ({
    [`& .${classes.activeLink}`]: {
        color: theme.palette.primary.main,
    },
}));

const PREFIX = "Navbar";
const classes = {
    stickyHeader: `${PREFIX}-stickyHeader`,
    animationFade: `${PREFIX}-animationFade`,
    activeLink: `${PREFIX}-activeLink`,
};

const animationFade = keyframes`
    0% {
        top: -50px;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    100% {
        top: 0;
        -webkit-transform: none;
        transform: none;
    }
`;

const Root = styled(AppBar)(({ theme }) => ({
    borderBottom: `none`,
    boxShadow: "none",
    top: 0,
    background: theme.palette.background.default,
    [`&.${classes.animationFade}`]: {
        display: "flex !important",
        animation: `${animationFade} 1s both`,
    },
    [`&.${classes.stickyHeader}`]: {
        top: "-50px",
        display: "none",
        background: theme.palette.background.default,
        boxShadow: theme.shadows[5]
    },
}));

const webLinks = ({ t, homePage }: { t: any, homePage: boolean }) => (
    <BoxStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
        {!homePage &&
            <HeaderLinkPath to={'/'}>
                {t(`home`)}
            </HeaderLinkPath>
        }
        {links.map((page) => {
            if (!homePage) {
                // if (page.link) {
                //     return (
                //         <HeaderLinkPath
                //             to={page.key}
                //             key={page.key}
                //             className={clsx({ [classesBox.activeLink]: location.pathname.replace(/\//g, "") === page.link })}
                //         >
                //             {t(`${page.name}`)}
                //         </HeaderLinkPath>
                //     )
                // } else {
                //     return ""
                // }
            }
            else {
                // if (page.link) {
                //     return (
                //         <HeaderLinkPath to={page.key} key={page.key} className={clsx({ [classesBox.activeLink]: location.pathname.replace(/\//g, "") === page.link })}>
                //             {t(`${page.name}`)}
                //         </HeaderLinkPath>
                //     )
                // }
                return (
                    <HeaderLink
                        key={page.key}
                        sx={{ display: 'block' }}
                        color='primary'
                        to={page.key}
                    >
                        {t(`${page.name}`)}
                    </HeaderLink>
                )
            }
        })}
    </BoxStyle>
)

const mobileLinks = ({ handleCloseNavMenu, t, homePage }: { handleCloseNavMenu: any, t: any, homePage: boolean }) => (
    <BoxStyle>
        {!homePage &&

            <Fragment >
                <MenuItem onClick={handleCloseNavMenu}>
                    <HeaderLinkPath to={'/'}>
                        {t(`home`)}
                    </HeaderLinkPath>
                </MenuItem>
            </Fragment>
        }
        {links.map((page, index) => {
            if (!homePage) {
                // if (page.link) {
                //     return (
                //         <Fragment key={page.key}>
                //             <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                //                 <HeaderLinkPath
                //                     to={page.key}
                //                     key={page.key}
                //                     className={clsx({ [classesBox.activeLink]: location.pathname.replace(/\//g, "") === page.link })}
                //                 >
                //                     {t(`${page.name}`)}
                //                 </HeaderLinkPath>
                //             </MenuItem>
                //             {index !== links.length - 1 && <Divider flexItem />}
                //         </Fragment>
                //     )
                // } else {
                //     return ""
                // }
            }
            else {
                // if (page.link) {
                //     return (
                //         <Fragment key={page.key}>
                //             <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                //                 <HeaderLinkPath to={page.key} key={page.key} className={clsx({ [classesBox.activeLink]: location.pathname.replace(/\//g, "") === page.link })}>
                //                     {t(`${page.name}`)}
                //                 </HeaderLinkPath>
                //             </MenuItem>
                //             {index !== links.length - 1 && <Divider flexItem />}
                //         </Fragment>

                //     )
                // }
                return (
                    <Fragment key={page.key}>
                        <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                            <HeaderLink
                                key={page.key}
                                onClick={handleCloseNavMenu}
                                sx={{ display: 'block' }}
                                color='primary'
                                to={page.key}
                            >
                                {t(`${page.name}`)}
                            </HeaderLink>
                        </MenuItem>
                        {index !== links.length - 1 && <Divider flexItem />}
                    </Fragment>
                )
            }
        })}
    </BoxStyle>
)

function Navbar() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [shouldShowHeader, setShouldShowHeader] = useState<boolean>(false);
    const [animationClass, setAnimationClass] = useState<string>('');
    const location = useLocation()
    const homePage = location.pathname === '/'
    const { t } = useTranslation()

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const listenToScroll = () => {
        setShouldShowHeader(window.pageYOffset > 300);
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        };
    }, []);

    useEffect(() => {
        if (shouldShowHeader) {
            setAnimationClass(classes.animationFade);
        } else {
            setAnimationClass('');
        }
    }, [shouldShowHeader]);

    // const screenWidth = useWidth();
    // const isScreenSmall = isWidthDown("sm", screenWidth);

    return (
        <Root
            position={shouldShowHeader ? "fixed" : "absolute"}
            className={clsx({
                [classes.stickyHeader]: shouldShowHeader,
                [animationClass]: shouldShowHeader,
            })}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Stack mx={2}>
                        <img
                            src={"/logo.webp"}
                            alt="meditech egypt logo"
                            srcSet={"/logo.webp"}
                            height={80}
                        />
                    </Stack>
                    <Stack direction={"row"} spacing={1} useFlexGap alignItems={"center"}>
                        <Stack direction={"row"} alignItems={"center"} spacing={1} useFlexGap>
                            {webLinks && webLinks({ t, homePage })}
                            {/* {!isScreenSmall && <Stack direction={"row"} spacing={1}>
                                {<LanguageMenu />}
                            </Stack>} */}
                        </Stack>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="default"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <Stack p={2} spacing={1}>
                                    {/* <Stack direction={"row"} spacing={1}>
                                        {<LanguageMenu />}
                                    </Stack> */}
                                    {mobileLinks && mobileLinks({ handleCloseNavMenu, t, homePage })}
                                </Stack>
                            </Menu>
                        </Box>
                    </Stack>
                </Toolbar>
            </Container>
        </Root>
    );
}

export default Navbar;


const StyledHeaderLink = styled(ScrollLink)(({ theme }) => ({
    display: "inline-block",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
        margin: theme.spacing(0, 1.5),
    },
    "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        padding: theme.spacing(1, 0),

        width: "100%",
        color: theme.palette.text.secondary,
    },
}));

const StyledHeaderLinkPath = styled(Link)(({ theme }) => ({
    display: "inline-block",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: 500,
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
        margin: theme.spacing(0, 1.5),
    },
    "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        padding: theme.spacing(1, 0),

        width: "100%",
        color: theme.palette.text.secondary,
    },
}));

const HeaderLink = (props: any) => {
    const { onClick, to } = props;
    const theme = useTheme();

    return (
        <StyledHeaderLink
            href={"/"}
            onClick={onClick}
            activeClass={classes.activeLink}
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={1000}
            offset={-theme.mixins.toolbar.minHeight!}
            to={to}
        >
            {props.children}
        </StyledHeaderLink>
    );
};

const HeaderLinkPath = (props: any) => {
    const { to, className } = props;
    // const theme = useTheme();

    return (
        <StyledHeaderLinkPath
            to={to}
            className={className}
        >
            {props.children}
        </StyledHeaderLinkPath>
    );
};

