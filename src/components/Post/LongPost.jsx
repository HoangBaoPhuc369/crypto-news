import { Box, Typography } from '@mui/material';
import _ from 'lodash';
import moment from 'moment/moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LongPost = ({ item }) => {
    const navi = useNavigate();
    return (
        <>
            <Box
                sx={{
                    padding: '10px',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'unset' },
                    gap: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    borderRadius: '12px',
                    cursor: 'pointer'
                }}
                onClick={() => navi(`/details/${_.get(item, '_id')}`)}
            >
                <Box
                    component="img"
                    src={_.get(item, 'imageUrl')}
                    alt=""
                    sx={{
                        width: { xs: '100%', md: '340px' },
                        height: { xs: '240px', md: 'auto' },
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
                            background: '#F5F5F5',
                            width: '100%',
                            marginBottom: { xs: '10px', md: '0px' }
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
        </>
    );
};

export default LongPost;
