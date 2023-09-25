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
            <Box>
                <Grid item container>
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', gap: '24px' }}>
                            {_.map(imageData, (image) => {
                                return (
                                    <>
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
                                                    textShadow: '0px 0px 2px rgba(0, 0, 0, 0.40)'
                                                }}
                                            >
                                                #{_.get(image, 'title')}
                                            </Typography>
                                        </Box>
                                    </>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Toolbar>
    );
};

export default CategoryNavbar;
