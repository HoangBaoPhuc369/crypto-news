import React from 'react';
import FirstSection from '../section/FirstSection';
import PostPress from '../horizontal/PostPress';
import SecondSection from '../section/SecondSection';
import HotNewsPost from '../sidePost/HotNewsPost';
import { Container } from '@mui/material';

const Body = () => {
    return (
        <>
            <FirstSection />
            <PostPress />
            <SecondSection />
            <PostPress />
            <Container maxWidth={'lg'}>
                <HotNewsPost />
            </Container>
        </>
    );
};

export default Body;
