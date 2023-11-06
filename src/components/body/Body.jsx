import React from 'react';
import FirstSection from '../section/FirstSection';
import PostPress from '../horizontal/PostPress';
import SecondSection from '../section/SecondSection';
import HotNewsPost from '../sidePost/HotNewsPost';
import { Container } from '@mui/material';
import SidePost from '../sidePost/SidePost';

const Body = ({ listCateData }) => {
    return (
        <>
            <FirstSection listCateData={listCateData} />
            <PostPress title="press release" />
            <SecondSection />
            <PostPress title="partner content" />
            <Container maxWidth={'lg'}>
                <SidePost title="Some Things You Missed" />
            </Container>
        </>
    );
};

export default Body;
