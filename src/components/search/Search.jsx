import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import TitleBody from '../title/TitleBody';
import Pagination from '@mui/material/Pagination';
import { useQuery } from 'react-query';
import PostApiService from '../../services/api-services/post.service';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import LongPost from '../Post/LongPost';

const SearchPage = () => {
    const { text } = useParams();

    const hookForm = useForm({
        defaultValues: {
            page: 1
        }
    });

    const { watch, setValue } = hookForm;

    const { language } = useSelector((state) => state.local);

    const qgetSearchResult = useQuery(
        ['qgetSearchResult', text, watch('page')],
        () => PostApiService.getSearchResult({ page: watch('page'), text: text, local: language }),
        {
            onSuccess: (data) => {
                // console.log(data);
            },
            refetchOnWindowFocus: false,
            enabled: Boolean(text)
        }
    );

    const results = _.get(qgetSearchResult, 'data.data.data', []);
    const totalResults = _.get(qgetSearchResult, 'data.data.total', 1);
    const totalPages = Math.ceil(totalResults / 8);

    const handlePageChange = (event, value) => {
        setValue('page', value);
    };
    return (
        <Container>
            {Boolean(_.get(qgetSearchResult, 'isLoading')) ? (
                <Typography>Loading ...</Typography>
            ) : results.length > 0 ? (
                <>
                    <Grid container>
                        <Grid item xs={12} sx={{ margin: '45px 0 20px 0' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                                <TitleBody title={`results for "${text}"`} />
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
                                <TitleBody title={`no results found for "${text}"`} />
                            </Box>
                        </Grid>
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default SearchPage;
