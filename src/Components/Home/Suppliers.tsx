import { SectionStyle } from '../../Styles'
import SectionTitle from '../SectionTitle'
import { Button, Container, Drawer, Grid2 as Grid, IconButton, Paper, PaperOwnProps, Stack, Typography } from '@mui/material'
import Data from '../../Data/suppliers.json'
import { useState } from 'react';
import { Close } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import './tt.css';

function PDFViewer({ pdf }: { pdf: string }) {
    return (
        <iframe
            src={pdf}
            width="100%"
            height="100%"
            title="PDF Viewer"
            style={{ width: '100%', minHeight: '500px', height: '100vh' }}
        />
    );
}

interface CustomPaperProps extends PaperOwnProps {
    customColor?: string;
}

const DrawerStyle = styled(Drawer)(() => ({
    "& .MuiDrawer-paper": {
        width: "100vw",
    },
}));

const PaperStyle = styled(Paper)<CustomPaperProps>(({ customColor }) => ({
    width: "100%",
    border: `1px solid ${customColor}`,
}));



const Suppliers = () => {
    const [open, setOpen] = useState(false);
    const [pdf, setPdf] = useState("");

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleOpen = (pdf: string) => () => {
        setPdf(pdf);
        setOpen(true);
    };


    return (
        <SectionStyle id="suppliers">

            <DrawerStyle open={open} onClose={toggleDrawer(false)} sx={{ "& .MuiDrawer-paper": { width: "100vw" } }}>
                <Stack>
                    <IconButton onClick={toggleDrawer(false)}>
                        <Close />
                    </IconButton>
                </Stack>
                <PDFViewer pdf={pdf} />
            </DrawerStyle>
            <Container maxWidth="lg">
                <SectionTitle
                    sectionTitle='Our Suppliers'
                />
                <Grid container spacing={2} alignItems={"stretch"} justifyContent={"center"}>
                    {Data.suppliers.map((supplier, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} display={"flex"}>
                            <PaperStyle customColor={supplier.color} elevation={4}>
                                <Stack alignItems={"center"} height={"100%"} justifyContent={"space-between"} p={2} spacing={2}>
                                    <Stack width={"70%"}>
                                        <img src={supplier.logo} alt={supplier.name} height={"80px"} />
                                    </Stack>
                                    <Stack alignItems={"center"} spacing={2}>
                                        <Stack alignItems={"center"}>
                                            <Typography fontSize={20} color='primary' fontWeight={"bold"}>
                                                {supplier.name}
                                            </Typography>
                                            {supplier.type &&
                                                <Typography fontSize={14} textAlign={"center"} color={"text.primary"}>
                                                    {supplier.type}
                                                </Typography>
                                            }
                                        </Stack>
                                        <Typography
                                            fontSize={15}
                                            textAlign={"center"}
                                            color={"text.secondary"}
                                            width={"90%"}
                                        >
                                            {supplier.description}
                                        </Typography>
                                        <Stack direction={"row"} spacing={2} justifyContent={"center"}>
                                            <Stack display={{ xs: 'none', sm: 'flex' }}>
                                                <Button variant='outlined' fullWidth onClick={handleOpen(supplier.pdf)}>preview</Button>
                                            </Stack>
                                            <a href={supplier.pdf} target='_blank' download={`${supplier.name}${supplier.type ? ` ${supplier.type}` : ''}`}>
                                                <Button variant='contained' fullWidth>download</Button>
                                            </a>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </PaperStyle>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </SectionStyle>
    )
}

export default Suppliers