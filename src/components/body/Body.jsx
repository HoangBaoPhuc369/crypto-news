import React from 'react';
import FirstSection from '../section/FirstSection';
import PostPress from '../horizontal/PostPress';
import SecondSection from '../section/SecondSection';
import HotNewsPost from '../sidePost/HotNewsPost';
import { Container } from '@mui/material';
import SidePost from '../sidePost/SidePost';

const Body = ({ listPost, listCateData, listPostRandom, listPostRandom2, bannerUrl }) => {
    return (
        <>
            <FirstSection listCateData={listCateData} bannerUrl={bannerUrl} />
            <PostPress title="Press Release" listPostRandom2={listPostRandom2} />
            <SecondSection listPost={listPost} />
            <PostPress title="Partner Content" listPostRandom2={listPostRandom2} />
            <Container maxWidth={'lg'}>
                <SidePost title="Missed Highlights" listPost={listPostRandom} />
            </Container>
        </>
    );
};

export default Body;
