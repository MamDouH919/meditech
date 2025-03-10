import { AppBar, Container, Dialog, Grid2 as Grid, IconButton, Paper, Slide, Toolbar } from "@mui/material"
import BreadCrumb from "../Components/layouts/BreadCrumb"
import products from "../Data/products.json"
import { useParams } from "react-router-dom"
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material"
import { SectionStyle } from "../Styles";
import SectionTitle from "../Components/SectionTitle";
import React, { useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { Close } from "@mui/icons-material";
// const images = (type) => import.meta.glob(`/src/assets/products/${type}/*.{jpg,png,jpeg}`, { eager: true });

const images = import.meta.glob('/src/assets/products/*/*.{jpg,png,jpeg}', { eager: true });

const getImagesByType = (type: string) => {
    return Object.entries(images)
        .filter(([path]) => path.includes(`/products/${type}/`)) // Filter by type
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(([_, img]: any) => img.default); // Get image URLs
};

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ImageStyle = styled("img")(() => ({
    width: "100%",
    height: "100%",
    objectFit: "fill",
}));

const GridStyle = styled(Grid)(() => ({
    cursor: "pointer",
}));

const ProductsView = () => {
    const { type } = useParams()
    const [product] = useState(products.find(product => product.type === type))
    const [selectedImage, setSelectedImage] = useState("")


    const filteredImages = type ? getImagesByType(type) : [];

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (img: string) => {
        setSelectedImage(img)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BreadCrumb pageLink={product?.title ?? ""} />
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <Close />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <ImageStyle src={selectedImage} alt={product?.title} />
            </Dialog>
            <SectionStyle>
                <SectionTitle
                    sectionTitle={product?.title ?? ""}
                    subSectionTitle={product?.description ?? ""}
                />
                <Container maxWidth={"lg"}>
                    <Grid container spacing={3}>
                        {filteredImages.map((img, index) => (
                            <GridStyle size={{ md: 4, sm: 6, xs: 12 }} key={index} onClick={() => handleClickOpen(img)} >
                                <Stack component={Paper} elevation={4} height={400} overflow={"hidden"}>
                                    <ImageStyle src={img} alt={product?.title} />
                                </Stack>
                            </GridStyle>
                        ))}
                    </Grid>
                </Container>
            </SectionStyle>
        </div>
    )
}

export default ProductsView