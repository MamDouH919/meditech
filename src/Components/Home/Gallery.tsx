import { useCallback, useEffect, useRef } from 'react'
import { SectionStyle } from '../../Styles'
import SectionTitle from '../SectionTitle'
import { Box, Container, Paper } from '@mui/material'

import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles';

import gallery1 from "../../assets/gallery/gallery1.jpeg"
import gallery2 from "../../assets/gallery/gallery2.jpeg"
import gallery3 from "../../assets/gallery/gallery3.jpeg"
import gallery4 from "../../assets/gallery/gallery4.jpeg"
import gallery5 from "../../assets/gallery/gallery5.jpeg"
import gallery6 from "../../assets/gallery/gallery6.jpeg"
import gallery8 from "../../assets/gallery/gallery8.jpeg"
import gallery9 from "../../assets/gallery/gallery9.jpeg"
import gallery10 from "../../assets/gallery/gallery10.jpeg"
import gallery11 from "../../assets/gallery/gallery11.jpeg"
import gallery12 from "../../assets/gallery/gallery12.jpeg"
import gallery13 from "../../assets/gallery/gallery13.jpeg"
import gallery14 from "../../assets/gallery/gallery14.jpeg"
import gallery15 from "../../assets/gallery/gallery15.jpeg"
import gallery16 from "../../assets/gallery/gallery16.jpeg"
import gallery17 from "../../assets/gallery/gallery17.jpeg"
import gallery18 from "../../assets/gallery/gallery18.jpeg"
import gallery19 from "../../assets/gallery/gallery19.jpeg"
import gallery20 from "../../assets/gallery/gallery20.jpeg"
import gallery21 from "../../assets/gallery/gallery21.jpeg"
import gallery22 from "../../assets/gallery/gallery22.jpeg"
import gallery23 from "../../assets/gallery/gallery23.jpeg"
import gallery24 from "../../assets/gallery/gallery24.jpeg"

const BoxStyle = styled(Box)(({ theme }) => ({
    display: "grid",
    gridAutoFlow: "column", /* Forces items to be laid out in a single row */
    gridGap: theme.spacing(3), /* Optional: Adds spacing between items */
    overflowX: "scroll", /* Allows horizontal scrolling if items overflow */
    whiteSpace: "nowrap",
    width: "100%",
    paddingBottom: theme.spacing(1),
    MsOverflowStyle: "none", /* Internet Explorer 10+ */
    "&::-webkit-scrollbar": {
        display: "none"
    },
    justifyContent: "start",
}))

const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
    gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15,
    gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22, gallery23, gallery24
];

const Gallery = () => {
    const gridRef = useRef<HTMLDivElement | null>(null); // Explicitly type the ref
    const requestRef = useRef<number | null>(null);
    const speed = 2; // Adjust speed

    const moveLeft = useCallback(() => {
        if (gridRef.current) {
            gridRef.current.scrollLeft += speed;
            // When reaching the start, reset to the middle (images are duplicated)
            if (gridRef.current.scrollLeft <= 0) {
                gridRef.current.scrollLeft = gridRef.current.scrollWidth / 2;
            }
        }
        requestRef.current = requestAnimationFrame(moveLeft);
    }, [speed]);

    useEffect(() => {
        const moveLeft = () => {
            if (gridRef.current) {
                gridRef.current.scrollLeft += speed;
                // When reaching the start, reset to the end to create an infinite loop
                if (gridRef.current.scrollLeft <= 0) {
                    gridRef.current.scrollLeft = gridRef.current.scrollWidth / 2;
                }

                requestRef.current = requestAnimationFrame(moveLeft);
            }
        };

        requestRef.current = requestAnimationFrame(moveLeft);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const handleMouseEnter = () => {
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
            requestRef.current = null;
        }
    };

    // Resume auto-scroll when mouse leaves
    const handleMouseLeave = () => {
        if (!requestRef.current) {
            requestRef.current = requestAnimationFrame(moveLeft);
        }
    };


    return (
        <SectionStyle id="gallery">
            <SectionTitle sectionTitle='Gallery' />
            <Container maxWidth="lg">
                <Stack alignItems={"center"} justifyContent={"center"} spacing={2}>
                    <BoxStyle
                        ref={gridRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {images.concat(images).map((image, index) => (
                            <ImageStack key={index} src={image} alt={"gallery"} />
                        ))}
                    </BoxStyle>
                </Stack>
            </Container>
        </SectionStyle>
    )
}

export default Gallery


const ImageStyle = styled("img")(() => ({
    objectFit: "cover",
}));


const ImageStack = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <Stack component={Paper} width={400} height={400} overflow={"hidden"} elevation={4}>
            <ImageStyle src={src} alt={alt} width={"100%"} height={"100%"} />
        </Stack>
    )
}