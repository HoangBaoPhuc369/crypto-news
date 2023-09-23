import { Box, Grid } from '@mui/material';
import React from 'react';
import image1 from '../../assets/images/test/1.jpg';
import image2 from '../../assets/images/test/2.jpg';
import image3 from '../../assets/images/test/3.jpg';
import image4 from '../../assets/images/test/4.jpg';

const MainBanner = () => {
    return (
        <Grid item container spacing={2} mt={1.5}>
            <Grid item xs={12} lg={6}>
                <Box sx={{ height: '546px', width: '100%' }}>
                    <img
                        src={image1}
                        style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                        alt=""
                        loading="lazy"
                    />
                </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Grid item container spacing={2}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                height: '258px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                            }}
                        >
                            <img
                                src={image2}
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                height: '270px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                            }}
                        >
                            <img
                                src={image3}
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                height: '270px',
                                width: '100%',
                                borderRadius: '15px',
                                boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
                            }}
                        >
                            <img
                                src={image4}
                                style={{ borderRadius: '15px', width: '100%', height: '100%', objectFit: 'cover' }}
                                loading="lazy"
                                alt=""
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default MainBanner;
