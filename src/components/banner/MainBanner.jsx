import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainBanner = ({ postSpotlight }) => {
    const navi = useNavigate();

    return (
        <Grid item container spacing={2} mt={1.5}>
            <Grid item xs={12} lg={6}>
                <Box
                    sx={{ height: '546px', width: '100%', position: 'relative', cursor: 'pointer' }}
                    onClick={() => navi(`/details/${_.get(postSpotlight[0], '_id')}`)}
                >
                    <img
                        // src={image1}
                        src={_.get(postSpotlight[0], 'imageUrl')}
                        style={{ borderRadius: '15px', width: 'inherit', height: '100%', objectFit: 'cover' }}
                        alt=""
                        loading="lazy"
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            height: '200px',
                            width: 'inherit',
                            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 65.67%)',
                            bottom: 0,
                            borderRadius: ' 0  0 15px 15px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            padding: '20px 0px',
                            flexDirection: 'column',
                            gap: '10px'
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '28px',
                                color: '#fff',
                                fontWeight: '600',
                                lineHeight: '1.3',
                                padding: '0 25px',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 3,
                                overflow: 'hidden'
                            }}
                        >
                            {_.get(postSpotlight[0], 'title')}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid item container spacing={2}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                height: '258px',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                            onClick={() => navi(`/details/${_.get(postSpotlight[1], '_id')}`)}
                        >
                            <img
                                src={_.get(postSpotlight[1], 'imageUrl')}
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    height: '100px',
                                    width: '100%',
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 65.67%)',
                                    bottom: 0,
                                    borderRadius: ' 0  0 15px 15px',
                                    display: 'flex',
                                    // alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    padding: '20px 0px',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        color: '#fff',
                                        fontWeight: '600',
                                        lineHeight: '1.3',
                                        px: '25px',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                        overflow: 'hidden'
                                    }}
                                >
                                    {_.get(postSpotlight[1], 'title')}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                height: '270px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                            onClick={() => navi(`/details/${_.get(postSpotlight[2], '_id')}`)}
                        >
                            <img
                                src={_.get(postSpotlight[2], 'imageUrl')}
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    minHeight: '100px',
                                    width: '100%',
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 65.67%)',
                                    bottom: 0,
                                    borderRadius: ' 0  0 15px 15px',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    padding: '20px 0px',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        color: '#fff',
                                        fontWeight: '600',
                                        lineHeight: '1.3',
                                        px: '25px',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                        overflow: 'hidden'
                                    }}
                                >
                                    {_.get(postSpotlight[2], 'title')}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                height: '270px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                            onClick={() => navi(`/details/${_.get(postSpotlight[3], '_id')}`)}
                        >
                            <img
                                src={_.get(postSpotlight[3], 'imageUrl')}
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    minHeight: '100px',
                                    width: '100%',
                                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 65.67%)',
                                    bottom: 0,
                                    borderRadius: ' 0  0 15px 15px',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    padding: '20px 0px',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '20px',
                                        color: '#fff',
                                        fontWeight: '600',
                                        lineHeight: '1.3',
                                        px: '25px',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                        overflow: 'hidden'
                                    }}
                                >
                                    {_.get(postSpotlight[3], 'title')}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MainBanner;
