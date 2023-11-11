import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import { fakeDataPost3 } from '../../data/fakeDataPost';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TitleBody from '../title/TitleBody';
import moment from 'moment';

const SecondSection = ({ listPost }) => {
    return (
        <Container maxWidth={'lg'}>
            <Grid container sx={{ marginBottom: '40px' }}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <TitleBody title="cryptocurrency news" />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px 16px 10px 24px;',
                            borderRadius: '12px',
                            background: '#F5F5F5',
                            marginRight: '15px',
                            cursor: 'pointer'
                        }}
                    >
                        <Typography>Show All</Typography>
                        <KeyboardArrowRightIcon />
                    </Box>
                </Grid>

                <Grid container xs={12} spacing={2}>
                    {_.map(listPost, (item, index) => {
                        return (
                            <Grid item xs={6} key={_.get(item, '_id', index)}>
                                <Box
                                    sx={{
                                        padding: '10px',
                                        display: 'flex',
                                        gap: '10px',
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                        borderRadius: '12px'
                                    }}
                                >
                                    <img
                                        src={_.get(item, 'imageUrl')}
                                        alt=""
                                        style={{
                                            width: '340px',
                                            height: '190px',
                                            objectFit: 'cover',
                                            borderRadius: '12px'
                                        }}
                                        loading="lazy"
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'center',
                                            gap: '12px'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#3E3232',
                                                fontSize: '16px',
                                                fontWeight: '600',
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
                                                padding: '5px 16px',
                                                borderRadius: '12px',
                                                background: '#F5F5F5'
                                            }}
                                        >
                                            <Box
                                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}
                                            >
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
                                                        {_.get(item, 'author.name')}
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
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Container>
    );
};

export default SecondSection;
