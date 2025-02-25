import { styled } from "@mui/material/styles";
import { ComponentProps } from "react";
import { Link, useLocation } from "react-router-dom";

const StyledHeaderLinkPath = styled(Link)<{ active: boolean, secondary?: boolean }>(({ theme, active }) => ({
    display: "inline-block",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: 800,
    opacity: active ? 1 : 0.5,
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
    whiteSpace: "nowrap",
    transition: "all 0.5s ease-in-out",
    [theme.breakpoints.up("md")]: {
        margin: theme.spacing(0, 1.5),
    },
    "&:hover": {
        opacity: 1,
        color: theme.palette.primary.main,
        cursor: "pointer",
    },
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        padding: theme.spacing(1, 0),
        width: "100%",
        color: active ? "red" : theme.palette.text.secondary,
    },
}));

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className"> & { to: string, secondary?: boolean }) {
    const location = useLocation();
    const isActive = location.pathname === props.to;

    return <StyledHeaderLinkPath {...props} active={isActive} secondary={props.secondary} />;
}
