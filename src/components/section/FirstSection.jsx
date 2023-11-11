import React from 'react';
import MainBanner from '../banner/MainBanner';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import HotNewsPost from '../sidePost/HotNewsPost';
import { Container } from '@mui/material';
import PromotionBanner from '../banner/promotion';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import PostApiService from '../../services/api-services/post.service';
import _ from 'lodash';

const FirstSection = ({ listCateData, bannerUrl }) => {
    const { language } = useSelector((state) => state.local);

    const qgetListPostSpotlight = useQuery(['qgetListPostSpotlight', language], () => PostApiService.getListPostSpotlight(language), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetListPostHotNews = useQuery(['qgetListPostHotNews', language], () => PostApiService.getListPostHotNews(language), {
        onSuccess: (data) => {},
        refetchOnWindowFocus: false
    });

    return (
        <>
            <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>
                <MainBanner postSpotlight={_.get(qgetListPostSpotlight, 'data.data.data', [])} />
                <CategoryNavbar listCateData={listCateData} />
                <PromotionBanner bannerUrl={bannerUrl} />
                <HotNewsPost hotNewsPost={_.get(qgetListPostHotNews, 'data.data.data', [])} />
            </Container>
        </>
    );
};

export default FirstSection;
