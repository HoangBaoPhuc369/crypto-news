import React from 'react';
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import Footer from '../../components/footer/Footer';
import { Box, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import CryptoApiService from '../../services/api-services/crypto.service';
import { useSelector } from 'react-redux';
import CategoryApiService from '../../services/api-services/category.service';
import PostApiService from '../../services/api-services/post.service';
import BannerApiService from '../../services/api-services/banner.service';
import _ from 'lodash';

const Home = () => {
    const { language } = useSelector((state) => state.local);

    const qgetListCategoryList = useQuery(
        ['qgetListCategoryList', language],
        () => CategoryApiService.getListCategoryList({ data: language }),
        {
            onSuccess: (data) => {
                // console.log(data);
            },
            refetchOnWindowFocus: false
        }
    );

    const qgetListPost = useQuery(['qgetListPost', language], () => PostApiService.getListPost(language), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetListPostRandom = useQuery(['qgetListPostRandom', language], () => PostApiService.getListPostRandom(language), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetListPostRandom2 = useQuery(['qgetListPostRandom2', language], () => PostApiService.getListPostRandom(language), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetMediumBanner = useQuery(['qgetMediumBanner', language], () => BannerApiService.getBanner('MEDIUM_HEADER_BANNER'), {
        onSuccess: (data) => {
            console.log(data);
        },
        refetchOnWindowFocus: false
    });

    return (
        <>
            <Body
                bannerUrl={_.get(qgetMediumBanner, 'data.data.bannerUrl', '')}
                listPostRandom={_.get(qgetListPostRandom, 'data.data.data', [])}
                listPostRandom2={_.get(qgetListPostRandom2, 'data.data.data', [])}
                listPost={_.get(qgetListPost, 'data.data.data', [])}
                listCateData={_.get(qgetListCategoryList, 'data.data.data', [])}
            />
        </>
    );
};

export default Home;
