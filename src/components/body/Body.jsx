import { Box, Container, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import CategoryNavbar from '../Navbar/CategoryNavbar';

const Body = () => {
    return (
        <Container maxWidth="lg">
            <CategoryNavbar />
        </Container>
    );
};

export default Body;
