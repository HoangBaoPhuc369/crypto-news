import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import TitleBody from '../../components/title/TitleBody';
import moment from 'moment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import Pagination from '@mui/material/Pagination';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import PostApiService from '../../services/api-services/post.service';

const AllPost = () => {
    const hookForm = useForm({
        defaultValues: {
            page: 1
        }
    });

    const { watch, setValue } = hookForm;

    const { language } = useSelector((state) => state.local);

    const qgetAllPost = useQuery(
        ['qgetAllPost', watch('page')],
        () => PostApiService.getListAllPost({ page: watch('page'), local: language }),
        {
            onSuccess: (data) => {
                // console.log(data);
            },
            refetchOnWindowFocus: false
        }
    );

    const results = _.get(qgetAllPost, 'data.data.data', []);
    const totalResults = _.get(qgetAllPost, 'data.data.total', 1);
    const totalPages = Math.ceil(totalResults / 8);

    const handlePageChange = (event, value) => {
        setValue('page', value);
    };

    return (
        <>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sx={{ margin: '45px 0 20px 0' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <TitleBody title="Today Best News" />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    {_.map(results, (item, index) => (
                        <Grid item xs={12} md={3} key={index}>
                            <Box
                                sx={{
                                    width: '100%',
                                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                    borderRadius: '12px',
                                    padding: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                <img
                                    src={_.get(item, 'imageUrl')}
                                    style={{ width: '100%', height: '190px', borderRadius: '12px', objectFit: 'cover' }}
                                    alt=""
                                    loading="lazy"
                                />
                                <Typography
                                    sx={{
                                        color: '#3E3232',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        margin: '16px 0',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 1,
                                        overflow: 'hidden'
                                    }}
                                >
                                    {_.get(item, 'title')}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'rgba(62, 50, 50, 0.75)',
                                        fontSize: '14px',
                                        fontWeight: '500',
                                        marginBottom: '16px',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2,
                                        overflow: 'hidden'
                                    }}
                                >
                                    {_.get(item, 'subTitle')}
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
                                        <VisibilityIcon sx={{ color: 'grey' }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                    <Grid item xs={12} mt={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Pagination
                            count={totalPages}
                            page={watch('page')}
                            onChange={handlePageChange}
                            variant="outlined"
                            shape="rounded"
                            className="paginationSection"
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AllPost;
