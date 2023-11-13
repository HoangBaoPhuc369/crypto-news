import { Box, Grid, Hidden, Typography } from '@mui/material';
import React, { useCallback, useRef } from 'react';
import image4 from '../../assets/images/test/4.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import { fakeDataPost } from '../../data/fakeDataPost';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import { Navigation } from 'swiper/modules';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TitleBody from '../title/TitleBody';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';

const HotNewsPost = ({ hotNewsPost }) => {
    const navi = useNavigate();
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <Grid item container sx={{ marginBottom: '40px' }}>
            <Grid item xs={12} sx={{ margin: '35px 0 20px 0', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <TitleBody title="Hot News" />
                </Box>
                <Box sx={{ display: 'flex', marginRight: '30px', gap: '20px' }}>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: '#F5F5F5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={handlePrev}
                    >
                        <KeyboardArrowLeftIcon />
                    </Box>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: '#F5F5F5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={handleNext}
                    >
                        <KeyboardArrowRightIcon />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', gap: '20px', overflow: 'hidden', height: '450px' }}>
                <Swiper ref={sliderRef} spaceBetween={10} slidesPerView={3} autoplay={true} className="PostSideSwiper">
                    {_.map(hotNewsPost, (item, index) => {
                        return (
                            <SwiperSlide key={_.get(item, '_id', index)}>
                                <Box
                                    sx={{
                                        width: '320px',
                                        // minHeight: '390px',
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                        borderRadius: '12px',
                                        padding: '10px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => navi(`/details/${_.get(item, '_id')}`)}
                                >
                                    <img
                                        src={_.get(item, 'imageUrl')}
                                        style={{ width: '100%', height: '190px', borderRadius: '12px', objectFit: 'cover' }}
                                        alt=""
                                        loading="lazy"
                                    />
                                    <Typography
                                        sx={{
                                            color: '#3E3232',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            margin: '16px 0',
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {_.get(item, 'title', '')}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'rgba(62, 50, 50, 0.75)',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            marginBottom: '16px',
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2,
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {_.get(item, 'subTitle', '')}
                                    </Typography>
                                    <Box
                                        sx={{
                                            padding: '13px 16px',
                                            borderRadius: '12px',
                                            background: '#F5F5F5'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                                            <img
                                                src={_.get(item, 'author.avatar')}
                                                alt=""
                                                style={{
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '12px',
                                                    objectFit: 'cover'
                                                }}
                                                loading="lazy"
                                            />
                                            <Box sx={{ flex: '1' }}>
                                                <Typography
                                                    sx={{
                                                        lineHeight: '22px',
                                                        fontSize: '14px',
                                                        color: '3E3232',
                                                        fontWeight: '600',
                                                        letterSpacing: '0.1px'
                                                    }}
                                                >
                                                    {_.get(item, 'author.name', '')}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        lineHeight: '18px',
                                                        fontSize: '12px',
                                                        color: '3E3232',
                                                        fontWeight: '500',
                                                        letterSpacing: '0.25px'
                                                    }}
                                                >
                                                    {moment(_.get(item, 'createdAt', new Date())).format('MMMM DD, YYYY')}
                                                </Typography>
                                            </Box>
                                            <VisibilityIcon sx={{ color: 'grey' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Grid>
        </Grid>
    );
};

export default HotNewsPost;
