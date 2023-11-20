import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import PostApiService from '../../services/api-services/post.service';
import TitleBody from '../title/TitleBody';
import moment from 'moment';

const TagPage = () => {
    const { tagName, tagId } = useParams();

    const hookForm = useForm({
        defaultValues: {
            page: 1
        }
    });

    useEffect(() => {
        hookForm.reset();
    }, [tagName, tagId]);

    const { watch, setValue } = hookForm;

    const { language } = useSelector((state) => state.local);

    const qgetTagsResult = useQuery(
        ['qgetTagsResult', tagId, watch('page')],
        () => PostApiService.getListPostTag({ page: watch('page'), id: tagId, local: language }),
        {
            onSuccess: (data) => {
                // console.log(data);
            },
            refetchOnWindowFocus: false,
            enabled: Boolean(tagId)
        }
    );

    const results = _.get(qgetTagsResult, 'data.data.data', []);
    const totalResults = _.get(qgetTagsResult, 'data.data.total', 1);
    const totalPages = Math.ceil(totalResults / 8);

    const handlePageChange = (event, value) => {
        setValue('page', value);
    };

    return (
        <Container>
            {Boolean(_.get(qgetTagsResult, 'isLoading')) ? (
                <Typography>Loading ...</Typography>
            ) : results.length > 0 ? (
                <>
                    <Grid container>
                        <Grid item xs={12} sx={{ margin: '45px 0 20px 0' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <TitleBody title={`${tagName}`} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} spacing={3}>
                        {_.map(results, (item, index) => {
                            return (
                                <Grid item xs={7} key={_.get(item, '_id')}>
                                    <Box
                                        sx={{
                                            padding: '10px',
                                            display: 'flex',
                                            gap: '10px',
                                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                            borderRadius: '12px',
                                            cursor: 'pointer'
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
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                                                    {_.get(item, 'title')}
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
                                                    {_.get(item, 'subTitle')}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    padding: '5px 16px',
                                                    borderRadius: '12px',
                                                    background: '#F5F5F5',
                                                    width: '100%',
                                                    marginBottom: '20px'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        gap: '10px'
                                                    }}
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
                        <Grid item xs={7} sx={{ display: 'flex', justifyContent: 'center' }}>
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
                </>
            ) : (
                <>
                    <Grid container>
                        <Grid item xs={12} sx={{ margin: '45px 0 20px 0' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <TitleBody title={`no results found for "${tagName}"`} />
                            </Box>
                        </Grid>
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default TagPage;
