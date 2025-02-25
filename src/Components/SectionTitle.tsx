import { Stack, Typography } from '@mui/material'
import { styled } from "@mui/material/styles";

const PREFIX = "SectionTitle";

const classes = {
    titleDivider: `${PREFIX}-titleDivider`,
};

const Root = styled(Stack)(({ theme }) => ({
    [`& .${classes.titleDivider}`]: {
        borderRadius: "20px",
        direction: "rtl",
        width: "100px",
        margin: "auto",
        height: 4,
        background: `linear-gradient(90deg,${theme.palette.secondary.main} 52%, ${theme.palette.primary.main} 52%)`,
        marginTop: theme.spacing(2),
    }
}));

interface inputProps {
    sectionTitle: string
    subSectionTitle?: string
}

const SectionTitle = (props: inputProps) => {
    const { sectionTitle, subSectionTitle } = props
    return (
        <Root mt={1} mb={5}>
            <Typography
                variant='h2'
                fontSize={28}
                textAlign={"center"}
                fontWeight={"bold"}
                textTransform={"capitalize"}
                color={"primary.main"}
            >
                {sectionTitle}
            </Typography>
            {subSectionTitle && <Typography variant='body2' fontSize={14} textAlign={"center"} color={"text.secondary"} mt={1} width={"80%"} mx={"auto"}>
                {subSectionTitle}
            </Typography>}
            <Stack className={classes.titleDivider}>
            </Stack>
        </Root>
    )
}

export default SectionTitle