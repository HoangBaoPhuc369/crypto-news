import {
    Box,
    Container,
    Grid,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    ListSubheader,
    Toolbar,
    Typography
} from '@mui/material';
import React from 'react';
import imageData from '../../../data/image';
import InfoIcon from '@mui/icons-material/Info';
import _ from 'lodash';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

const CategoryNavbar = () => {
    return (
        <Toolbar
            sx={{
                mt: '20px',
                borderRadius: '15px',
                background: '#F5F5F5',
                height: '68px',
                display: 'flex',
                alignItems: 'center',
                overflowX: 'hidden'
            }}
        >
            <Grid item xs={12} sx={{ width: '100%' }}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={6}
                    navigation={true}
                    // centeredSlides={true}
                    modules={[Navigation]}
                    className="CategorySwiper"
                >
                    {_.map(imageData, (image, index) => {
                        return (
                            <>
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            height: '48px',
                                            overflow: 'hidden',
                                            borderRadius: '10px',
                                            boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                                        }}
                                    >
                                        <img
                                            src={_.get(image, 'img')}
                                            style={{
                                                width: '170px',
                                                height: '48px',
                                                objectFit: 'cover',
                                                filter: 'blur(1.5px)',
                                                WebkitFilter: 'blur(1.5px)'
                                            }}
                                            alt=""
                                            loading="lazy"
                                        />
                                        <Typography
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transform: 'translate(-50%, -50%)',
                                                color: '#fff',
                                                fontSize: '16px',
                                                textShadow: '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)'
                                            }}
                                        >
                                            #{_.get(image, 'title')}
                                        </Typography>
                                    </Box>
                                </SwiperSlide>
                            </>
                        );
                    })}
                </Swiper>
            </Grid>
        </Toolbar>
    );
};

export default CategoryNavbar;
