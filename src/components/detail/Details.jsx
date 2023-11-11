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

const Details = () => {
    const { id } = useParams();
    const { language } = useSelector((state) => state.local);

    const qgetDetailPost = useQuery(['qgetDetailPost', language], () => PostApiService.getDetailPost({ id: id, local: language }), {
        onSuccess: (data) => {
            console.log(data);
        },
        refetchOnWindowFocus: false
    });

    const qgetListPostRandom = useQuery(['qgetListPostRandom', language], () => PostApiService.getListPostRandom(language), {
        onSuccess: (data) => {
            console.log(data);
        },
        refetchOnWindowFocus: false
    });

    return (
        <Container>
            <Grid container sx={{ minHeight: '100vh' }}>
                <DetailContent post={_.get(qgetDetailPost, 'data.data', {})} />

                <SidePost title="Relate Post" listPost={_.get(qgetListPostRandom, 'data.data.data', [])} />
            </Grid>
        </Container>
    );
};

export default Details;
