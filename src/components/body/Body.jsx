import { Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import MainBanner from '../banner/MainBanner';
import HotNewsPost from '../sidePost/HotNewsPost';

const Body = () => {
    return (
        <Container maxWidth="lg">
            <MainBanner />
            <CategoryNavbar />
            <HotNewsPost />
        </Container>
    );
};

export default Body;
