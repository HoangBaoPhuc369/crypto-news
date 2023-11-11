import React from 'react';
import FirstSection from '../section/FirstSection';
import PostPress from '../horizontal/PostPress';
import SecondSection from '../section/SecondSection';
import HotNewsPost from '../sidePost/HotNewsPost';
import { Container } from '@mui/material';
import SidePost from '../sidePost/SidePost';

const Body = ({ listPost, listCateData, listPostRandom, bannerUrl }) => {
    return (
        <>
            <FirstSection listCateData={listCateData} bannerUrl={bannerUrl} />
            <PostPress title="press release" />
            <SecondSection listPost={listPost} />
            <PostPress title="partner content" />
            <Container maxWidth={'lg'}>
                <SidePost title="Some Things You Missed" listPost={listPostRandom} />
            </Container>
        </>
    );
};

export default Body;
