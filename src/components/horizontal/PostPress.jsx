import { Box, Container, Grid, Typography } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { fakeDataPost2 } from '../../data/fakeDataPost';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const PostPress = () => {
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
                                <Typography sx={{ fontSize: '32px', color: '#17191a', fontWeight: '600' }}>partner content</Typography>
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
                                    {_.map(fakeDataPost2, (item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <Box sx={{ margin: '0 15px', width: '252px' }}>
                                                    <img
                                                        src={_.get(item, 'img')}
                                                        alt=""
                                                        style={{ width: '252px', height: '150px', borderRadius: '16px' }}
                                                    />
                                                    <Typography
                                                        sx={{ fontSize: '16px', color: '#17191a', fontWeight: '600', lineHeight: '1.3' }}
                                                    >
                                                        Deutsche Bank to secure crypto for institutions, TRX and DOMI may find support
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
