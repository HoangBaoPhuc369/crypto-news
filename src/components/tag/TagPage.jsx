import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CategoryNavbar from '../Navbar/CategoryNavbar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import PostApiService from '../../services/api-services/post.service';
import TitleBody from '../title/TitleBody';
import moment from 'moment';
import LongPost from '../Post/LongPost';

const TagPage = () => {
    const { tagName, tagId } = useParams();
    const navi = useNavigate();

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
                    <Grid container spacing={3}>
                        {_.map(results, (item, index) => {
                            return (
                                <Grid item xs={12} md={7} key={_.get(item, '_id')}>
                                    <LongPost item={item} />
                                </Grid>
                            );
                        })}
                        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center' }}>
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
