import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import _ from 'lodash';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TitleBody from '../title/TitleBody';
import { useNavigate } from 'react-router-dom';
import LongPost from '../Post/LongPost';

const SecondSection = ({ listPost }) => {
    const navi = useNavigate();

    return (
        <Container maxWidth={'lg'}>
            <Grid container sx={{ marginBottom: '40px' }}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '35px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <TitleBody title="crypto news" />
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
                        onClick={() => navi(`/all-post`)}
                    >
                        <Typography>Show All</Typography>
                        <KeyboardArrowRightIcon />
                    </Box>
                </Grid>

                <Grid container spacing={2}>
                    {_.map(listPost, (item, index) => {
                        return (
                            <Grid item xs={12} md={6} key={_.get(item, '_id', index)}>
                                <LongPost item={item} />
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </Container>
    );
};

export default SecondSection;
