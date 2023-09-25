import React from 'react';
import MainBanner from '../banner/MainBanner';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import HotNewsPost from '../sidePost/HotNewsPost';
import { Container } from '@mui/material';
import PromotionBanner from '../banner/promotion';

const FirstSection = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>
                <MainBanner />
                <CategoryNavbar />
                <HotNewsPost />
                <PromotionBanner />
            </Container>
        </>
    );
};

export default FirstSection;
