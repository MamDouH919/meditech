import { useCallback, useEffect, useRef } from 'react'
import { SectionStyle } from '../../Styles'
import SectionTitle from '../SectionTitle'
import { Box, Container, Paper } from '@mui/material'

import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles';

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

// const imagesData = import.meta.glob('/src/assets/gallery/*.{jpg,png,jpeg}', { eager: true });
// const images = Object.values(imagesData);

const imagesData = import.meta.glob('/src/assets/gallery/*.{jpg,png,jpeg}', { eager: true });
const images = Object.values(imagesData).map((image) => (image as { default: string }).default);




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
                            <ImageStack key={index} src={image} alt={`meditech egypt gallery ${index}`} />
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