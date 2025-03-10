import { Box, Grid2 as Grid } from '@mui/material'
import { styled } from '@mui/material/styles'



const ImageWrapper = styled(Box)(({ theme }) => ({
    height: 300,
    width: 300,
    border: `8px solid ${theme.palette.primary.main}`,
}))


const Leader = () => {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>

            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <ImageWrapper>

                </ImageWrapper>
            </Grid>
        </Grid>
    )
}

export default Leader