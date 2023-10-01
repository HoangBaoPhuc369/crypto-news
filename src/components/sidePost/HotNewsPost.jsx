import { Box, Grid, Hidden, Typography } from '@mui/material';
import React from 'react';
import image4 from '../../assets/images/test/4.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import { fakeDataPost } from '../../data/fakeDataPost';

const HotNewsPost = () => {
    return (
        <Grid item container>
            <Grid item xs={12} sx={{ margin: '45px 0 20px 0' }}>
                <Box sx={{ position: 'relative' }}>
                    <Typography
                        sx={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#bb1919',
                            textTransform: 'uppercase',
                            px: '10px',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: '6px',
                                background: '#bb1919',
                                left: '0',
                                height: '55%',
                                width: '7px'
                            }
                        }}
                    >
                        Hot News
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', gap: '20px', overflow: 'hidden', padding: '10px', width: '100%' }}>
                {_.map(fakeDataPost, (item, index) => {
                    return (
                        <Box
                            sx={{
                                width: '320px',
                                // minHeight: '390px',
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                borderRadius: '12px',
                                padding: '10px'
                            }}
                        >
                            <img src={_.get(item, 'img')} style={{ width: '100%', height: '190px', borderRadius: '12px', objectFit: 'cover' }} alt="" />
                            <Typography sx={{ color: '#3E3232', fontSize: '16px', fontWeight: '600', padding: '16px 0' }}>
                                Opening Day of Boating Season, Seattle WA
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'rgba(62, 50, 50, 0.75)',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    paddingBottom: '16px'
                                }}
                            >
                                Of course the Puget Sound is very watery, and where there is water, there are boats. Today is
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
                                        src={_.get(item, 'avatar')}
                                        alt=""
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            borderRadius: '12px',
                                            objectFit: 'cover'
                                        }}
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
                                            James
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
                                            August 18 , 2022
                                        </Typography>
                                    </Box>
                                    <VisibilityIcon sx={{ color: 'grey' }} />
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Grid>
        </Grid>
    );
};

export default HotNewsPost;
