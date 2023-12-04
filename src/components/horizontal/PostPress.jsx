import { Box, Container, Grid, Typography } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { fakeDataPost2 } from '../../data/fakeDataPost';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const PostPress = ({ title, listPostRandom2 }) => {
    const navi = useNavigate();

    return (
        <Grid item container>
            <Grid item xs={12}>
                <Box
                    sx={{
                        width: '100%',
                        background: '#f0f3f5',
                        marginBottom: '40px'
                    }}
                >
                    <Container maxWidth={'lg'} sx={{ padding: '24px 0' }}>
                        <Grid container>
                            <Grid item xs={12} sx={{ marginBottom: '30px' }}>
                                <Typography sx={{ fontSize: '32px', color: '#17191a', fontWeight: '600' }}>{title}</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex' }}>
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={4}
                                    loop
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false
                                    }}
                                    modules={[Autoplay]}
                                    className="PostPressSwiper"
                                >
                                    {_.map(listPostRandom2, (item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <Box
                                                    sx={{ margin: '0 15px', width: '252px', cursor: 'pointer' }}
                                                    onClick={() => navi(`/details/${_.get(item, '_id')}`)}
                                                >
                                                    <img
                                                        src={_.get(item, 'imageUrl')}
                                                        alt=""
                                                        loading="lazy"
                                                        style={{
                                                            width: '252px',
                                                            height: '150px',
                                                            borderRadius: '16px',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                    <Typography
                                                        sx={{
                                                            fontSize: '16px',
                                                            color: '#17191a',
                                                            fontWeight: '600',
                                                            lineHeight: '1.3',
                                                            display: '-webkit-box',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 2,
                                                            overflow: 'hidden'
                                                        }}
                                                    >
                                                        {_.get(item, 'title')}
                                                    </Typography>
                                                </Box>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Grid>
        </Grid>
    );
};

export default PostPress;
