import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
    ...theme.mixins.toolbar,
    background: "blue",
}));

const Layout = () => {
    return (
        <>
            <Navbar />
            <StyledBox />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout