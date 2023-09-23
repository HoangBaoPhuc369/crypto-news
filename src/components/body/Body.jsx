import { Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import MainBanner from '../banner/MainBanner';

const Body = () => {
    return (
        <Container maxWidth="lg">
            <MainBanner />
            <CategoryNavbar />
        </Container>
    );
};

export default Body;
