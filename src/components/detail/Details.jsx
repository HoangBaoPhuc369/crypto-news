import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import ReplyIcon from '@mui/icons-material/Reply';
import SidePost from '../sidePost/SidePost';
import TitleBody from '../title/TitleBody';
import SvgIcon from '../../components/svg';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import DetailContent from './DetailContent';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import PostApiService from '../../services/api-services/post.service';
import BannerApiService from '../../services/api-services/banner.service';

const Details = () => {
    const { id } = useParams();
    const { language } = useSelector((state) => state.local);

    const qgetDetailPost = useQuery(['qgetDetailPost', language, id], () => PostApiService.getDetailPost({ id: id, local: language }), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetListPostRandom = useQuery(['qgetListPostRandom', language, id], () => PostApiService.getListPostRandom(language), {
        onSuccess: (data) => {
            // console.log(data);
        }
    });

    const qgetListPostHotNews = useQuery(['qgetListPostHotNews', language, id], () => PostApiService.getListPostTopPost(language), {
        onSuccess: (data) => {},
        refetchOnWindowFocus: false
    });

    const qgetBanner1 = useQuery(['qgetBanner1', language, id], () => BannerApiService.getBanner('MEDIUM_DETAIL_BANNER_1'), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetBanner2 = useQuery(['qgetBanner2', language, id], () => BannerApiService.getBanner('MEDIUM_DETAIL_BANNER_2'), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetBanner3 = useQuery(['qgetBanner3', language, id], () => BannerApiService.getBanner('MEDIUM_DETAIL_BANNER_3'), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetBanner4 = useQuery(['qgetBanner4', language, id], () => BannerApiService.getBanner('MEDIUM_DETAIL_BANNER_4'), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetBanner5 = useQuery(['qgetBanner5', language, id], () => BannerApiService.getBanner('MEDIUM_DETAIL_BANNER_5'), {
        onSuccess: (data) => {
            // console.log(data);
        },
        refetchOnWindowFocus: false
    });

    return (
        <Container>
            <Box sx={{ minHeight: '100vh' }}>
                <DetailContent
                    post={_.get(qgetDetailPost, 'data.data', {})}
                    postRefetch={qgetDetailPost.refetch}
                    topPost={_.get(qgetListPostHotNews, 'data.data.data', [])}
                    banner1={_.get(qgetBanner1, 'data.data.bannerUrl', '')}
                    banner2={_.get(qgetBanner2, 'data.data.bannerUrl', '')}
                    banner3={_.get(qgetBanner3, 'data.data.bannerUrl', '')}
                    banner4={_.get(qgetBanner4, 'data.data.bannerUrl', '')}
                    banner5={_.get(qgetBanner5, 'data.data.bannerUrl', '')}
                />

                <SidePost title="Relate Post" listPost={_.get(qgetListPostRandom, 'data.data.data', [])} />
            </Box>
        </Container>
    );
};

export default Details;
