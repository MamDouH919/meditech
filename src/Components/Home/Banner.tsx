import { styled } from "@mui/material/styles";
import BG from '../../assets/banner.webp';
import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Paper, Stack, Tabs } from "@mui/material";
import ur1 from "../../assets/banner/urology1.avif"
import ur2 from "../../assets/banner/urology2.jpeg"
import ur3 from "../../assets/banner/urology3.jpg"
import interventional1 from "../../assets/banner/interventional1.png"
import interventional2 from "../../assets/banner/interventional2.png"
import interventional3 from "../../assets/banner/interventional3.png"
import anesthesiology1 from "../../assets/banner/anesthesiology1.png"
import anesthesiology2 from "../../assets/banner/anesthesiology2.png"
import anesthesiology3 from "../../assets/banner/anesthesiology3.png"
import { motion } from "framer-motion";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const Root = styled(Stack)(() => ({
    backgroundImage: `url(${BG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `#000000c2`,
    },
}));

const TabStyle = styled(Tab)(({ theme }) => ({
    color: `#fff`,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "1.1rem",
}));


function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Banner = () => {
    const [value, setValue] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Store interval ID

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        startAutoSwitch(); // Start auto-switching on mount
        setValue(newValue);
    };

    useEffect(() => {
        startAutoSwitch(); // Start auto-switching on mount
        return () => stopAutoSwitch(); // Cleanup on unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const startAutoSwitch = () => {
        stopAutoSwitch(); // Ensure no duplicate intervals
        intervalRef.current = setInterval(() => {
            setValue((prev) => (prev + 1) % 3); // Cycle through tabs
        }, 5000);
    };

    const stopAutoSwitch = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (
        <Root spacing={2} py={10} justifyContent={"center"} id="banner">
            <Stack zIndex={1} alignItems={"center"} justifyContent={"center"} spacing={4}>
                <Box sx={{ maxWidth: { xs: 300, sm: "100%" }, borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="wrapped label scrollable auto tabs example"

                    >
                        <TabStyle wrapped label="Urology" {...a11yProps(0)} />
                        <TabStyle wrapped label="Interventional & Cardiology" {...a11yProps(1)} />
                        <TabStyle wrapped label="Anesthesiology & Critical care" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <AnimatedImageStack images={[ur1, ur2, ur3]} alt="urology" />
                    {/* <Button>Download</Button> */}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <AnimatedImageStack images={[interventional1, interventional2, interventional3]} alt="interventional" />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <AnimatedImageStack images={[anesthesiology1, anesthesiology2, anesthesiology3]} alt="anesthesiology" />
                </CustomTabPanel>
            </Stack>
        </Root>
    )
}

export default Banner

const ImageStyle = styled("img")(() => ({
    objectFit: "fill",
}));


const AnimatedImageStack = ({ images, alt }: { images: string[], alt: string }) => {
    return (
        <Stack direction="row" gap={2} justifyContent="center" flexWrap={"wrap"}>
            {images.map((src, index) => (
                <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3, duration: 0.5 }} // Staggered effect
                >
                    <ImageStack src={src} alt={alt} />
                </motion.div>
            ))}
        </Stack>
    );
};

const ImageStack = ({ src, alt }: { src: string, alt: string }) => {
    return (
        <Stack width={250} height={250} component={Paper} overflow={"hidden"} elevation={4}>
            <ImageStyle src={src} alt={alt} width={"100%"} height={"100%"} />
        </Stack>
    )
}