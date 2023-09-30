import { Box, Container, Grid, Typography } from '@mui/material';
import _ from 'lodash';
import React from 'react';

const PostPress = () => {
    return (
        <Grid item container>
            <Grid item xs={12}>
                <Box
                    sx={{
                        width: '100%',
                        background: '#0E0F0F',
                        marginBottom: '40px'
                    }}
                >
                    <Container maxWidth={'lg'} sx={{ padding: '24px 0' }}>
                        <Grid container>
                            <Grid item xs={12} sx={{ marginBottom: '30px' }}>
                                <Typography sx={{ fontSize: '32px', color: '#fff' }}>partner content</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: 'flex' }}>
                                {_.map([1, 2, 3, 4], (item, index) => {
                                    return (
                                        <Box sx={{ margin: '0 15px', width: '252px' }}>
                                            <img
                                                src="https://crypto.news/app/uploads/2023/07/crypto-news-the-trading-chart-is-rising-blurry-background-low-poly-sty.jpg.webp"
                                                alt=""
                                                style={{ width: '252px', height: '150px', borderRadius: '16px' }}
                                            />
                                            <Typography sx={{ fontSize: '16px', color: '#fff', fontWeight: '600', lineHeight: '1.3' }}>
                                                Deutsche Bank to secure crypto for institutions, TRX and DOMI may find support
                                            </Typography>
                                        </Box>
                                    );
                                })}
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Grid>
        </Grid>
    );
};

export default PostPress;