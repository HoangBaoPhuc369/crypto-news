import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import TitleBody from '../title/TitleBody';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import _ from 'lodash';
import moment from 'moment';
import 'quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import './style/detail.css';
import Iconify from '../iconify';
import UserHolder from '/assets/images/user_placeholder.png';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PostApiService from '../../services/api-services/post.service';
import { useMutation } from 'react-query';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';

const DetailContent = ({ post, postRefetch, topPost, banner1, banner2, banner3, banner4, banner5 }) => {
    const navi = useNavigate();

    const schema = yup.object().shape({
        name: yup.string().required('Please enter a name'),
        email: yup.string().email('Email not valid').required('Please enter a email'),
        comment: yup.string().required('Please enter a comment')
    });

    const hookForm = useForm({
        defaultValues: {
            name: '',
            email: '',
            comment: ''
        },
        resolver: yupResolver(schema)
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = hookForm;

    const mCreateComment = useMutation((data) => PostApiService.createComment(data), {
        onError: (err) => {
            console.log(err);
        },
        onSuccess: (data) => {
            hookForm.reset();
            postRefetch();
            // console.log(data);
        }
    });

    const handleComment = (data) => {
        const params = _.assign({}, data, { id: _.get(post, '_id') });
        mCreateComment.mutate(params);
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ margin: '20px 0' }}>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            width: '100%',
                            borderRadius: '24px',
                            background: '#F5F5F5',
                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
                        }}
                    >
                        <Typography
                            component={'h1'}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '32px 32px 10px',
                                fontSize: { xs: '24px', md: '30px' },
                                fontWeight: '700'
                            }}
                        >
                            {_.get(post, 'title')}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                component="img"
                                src={_.get(post, 'imageUrl')}
                                sx={{
                                    width: 'calc(100% - 32px)',
                                    height: { xs: '250px', md: '450px' },
                                    borderRadius: '16px',
                                    marginBottom: '16px',
                                    objectFit: 'cover',
                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
                                }}
                                alt=""
                                loading="lazy"
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} mt={3} sx={{ display: 'flex', gap: '26px', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', gap: '8px' }}>
                            <CalendarMonthIcon sx={{ color: '#3E323280', fontSize: '20px' }} />
                            <Typography sx={{ color: '#3E323280', fontSize: { xs: '10px', md: '14px' } }}>
                                {moment(_.get(post, 'createdAt', new Date())).format('MMMM DD, YYYY')}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '8px' }}>
                            <PersonIcon sx={{ color: '#3E323280', fontSize: '20px' }} />
                            <Typography sx={{ color: '#3E323280', fontSize: { xs: '10px', md: '14px' } }}>
                                By {_.get(post, 'author.name')}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '8px' }}>
                            <CategoryIcon sx={{ color: '#3E323280', fontSize: '20px' }} />
                            <Typography sx={{ color: '#3E323280', fontSize: { xs: '10px', md: '14px' } }}>
                                {_.get(post, 'categoryName')}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ margin: '15px 12px 0 12px' }}>
                        <Typography
                            component={'h2'}
                            sx={{
                                display: 'flex',
                                padding: '10px 25px',
                                justifyContent: 'center',
                                fontSize: { xs: '16px', md: '24px' },
                                fontWeight: '600',
                                color: '#444a4d',
                                wordBreak: 'break-word',
                                wordWrap: 'nowrap'
                            }}
                        >
                            {_.get(post, 'subTitle')}
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sx={{ margin: '0 16px 40px 16px' }}>
                        <div className="ql-editor ql-css-img">{parse(_.get(post, 'body', ''))}</div>
                    </Grid>

                    <Grid item xs={12} sx={{ margin: '0 0 30px 0' }}>
                        <Box sx={{ position: 'relative' }}>
                            <TitleBody title="Comments" />
                        </Box>
                    </Grid>
                    {_.get(post, 'comments', []).length > 0 ? (
                        <>
                            {_.map(_.get(post, 'comments', []), (item) => (
                                <Grid
                                    item
                                    xs={12}
                                    sx={{
                                        padding: '15px 20px 20px 20px',
                                        background: '#F5F5F5',
                                        borderRadius: '24px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '15px',
                                        marginBottom: '15px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: '10px'
                                            }}
                                        >
                                            <img
                                                src={UserHolder}
                                                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '16px' }}
                                                alt=""
                                            />
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px' }}>
                                                <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>
                                                    {_.get(item, 'commentBy.name')}
                                                </Typography>
                                                <Box sx={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                                    <CalendarMonthIcon sx={{ color: '#3E323280', fontSize: '16px' }} />
                                                    <Typography
                                                        sx={{ fontSize: '14px', fontWeight: '500', color: 'rgba(62, 50, 50, 0.75)' }}
                                                    >
                                                        {moment(_.get(item, 'createdAt', new Date())).format('MMMM DD, YYYY')}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box component={'p'} sx={{ margin: '0', marginBottom: '15px' }}>
                                        {_.get(item, 'body')}
                                    </Box>
                                </Grid>
                            ))}
                        </>
                    ) : (
                        <Grid item xs={12} sx={{ padding: '32px 0' }}>
                            <Box
                                sx={{ marginBottom: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                            >
                                <Iconify icon={'ant-design:comment-outlined'} sx={{ color: 'rgb(126, 119, 126)' }} width={25} />
                                <Typography sx={{ color: 'rgb(126, 119, 126)', fontSize: '14px', fontWeight: '400' }}>
                                    Be the first one to comment on the post
                                </Typography>
                            </Box>
                        </Grid>
                    )}

                    <Grid item xs={12} sx={{ margin: '40px 0 30px 0' }}>
                        <Box sx={{ position: 'relative' }}>
                            <TitleBody title="Add A Comment" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', gap: '10px' }}>
                        <Grid
                            xs={6}
                            sx={{
                                padding: '10px',
                                background: '#F5F5F5',
                                borderRadius: '12px',
                                height: '58px',
                                marginBottom: '10px'
                            }}
                        >
                            <TextField
                                placeholder="Name"
                                disableOutline={true}
                                variant="standard"
                                {...hookForm.register('name')}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                                        display: 'none'
                                    },
                                    marginBottom: '10px',
                                    borderRadius: '12px'
                                }}
                                error={!!errors.name}
                                helperText={errors.name && errors.name.message}
                            ></TextField>
                        </Grid>

                        <Grid
                            xs={6}
                            sx={{ padding: '10px', background: '#F5F5F5', borderRadius: '12px', height: '58px', marginBottom: '10px' }}
                        >
                            <TextField
                                type="email"
                                placeholder="Email"
                                disableOutline={true}
                                variant="standard"
                                {...hookForm.register('email')}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                                        display: 'none'
                                    },
                                    marginBottom: '10px',
                                    borderRadius: '12px'
                                }}
                                error={!!errors.email}
                                helperText={errors.email && errors.email.message}
                            ></TextField>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ background: '#F5F5F5', borderRadius: '24px', height: '252px', padding: '26px 20px 20px' }}>
                            <TextField
                                placeholder="Type comment here ..."
                                multiline
                                maxRows={9}
                                {...hookForm.register('comment')}
                                variant="standard"
                                disableOutline={true}
                                sx={{
                                    width: '100%',
                                    height: '206px',
                                    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
                                        display: 'none'
                                    },
                                    marginBottom: '10px'
                                }}
                                error={!!errors.comment}
                                helperText={errors.comment && errors.comment.message}
                            ></TextField>
                            <LoadingButton
                                sx={{
                                    float: 'right',
                                    textTransform: 'unset',
                                    marginTop: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#ffff',
                                    backgroundColor: '#de0b02',
                                    px: '15px',
                                    '&:hover': { backgroundColor: '#ea4343' }
                                }}
                                loading={Boolean(_.get(mCreateComment, 'loading'))}
                                startIcon={<MessageRoundedIcon />}
                                onClick={hookForm.handleSubmit(handleComment)}
                            >
                                Send Comment
                            </LoadingButton>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Box sx={{ borderRadius: '16px', background: '#F5F5F5' }}>
                            <Grid item xs={12}>
                                <Grid item xs={12} sx={{ margin: '20px 0 10px 0', padding: '20px 15px 0' }}>
                                    <Box sx={{ position: 'relative' }}>
                                        <TitleBody title="Tags" />
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{ padding: '0 15px 20px' }}>
                                <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                    {_.map(_.get(post, 'tags', []), (item, index) => {
                                        return (
                                            <Typography
                                                sx={{
                                                    color: '#3E3232BF',
                                                    background: '#fff',
                                                    padding: '5px 10px',
                                                    borderRadius: '12px',
                                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px'
                                                }}
                                            >
                                                {item}
                                            </Typography>
                                        );
                                    })}
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ borderRadius: '16px', background: '#F5F5F5' }}>
                            <Grid item xs={12}>
                                <Grid item xs={12} sx={{ margin: '20px 0 10px 0', padding: '20px 15px 0' }}>
                                    <Box sx={{ position: 'relative' }}>
                                        <TitleBody title="Top Post" />
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sx={{ padding: '0 15px 20px' }}>
                                <Box sx={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                    {_.map(topPost, (item) => {
                                        return (
                                            <Box
                                                sx={{ display: 'flex', gap: '15px', cursor: 'pointer' }}
                                                key={_.get(item, '_id')}
                                                onClick={() => navi(`/details/${_.get(item, '_id')}`)}
                                            >
                                                <img
                                                    src={_.get(item, 'imageUrl')}
                                                    alt=""
                                                    style={{ width: '87px', height: '87px', borderRadius: '12px', objectFit: 'cover' }}
                                                />
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        gap: '5px',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: '14px',
                                                            fontWeight: '600',
                                                            wordWrap: 'break-word',
                                                            display: '-webkit-box',
                                                            WebkitBoxOrient: 'vertical',
                                                            WebkitLineClamp: 2,
                                                            overflow: 'hidden'
                                                        }}
                                                    >
                                                        {_.get(item, 'title')}
                                                    </Typography>
                                                    <Typography
                                                        sx={{ fontSize: '12px', fontWeight: '500', color: 'rgba(62, 50, 50, 0.75)' }}
                                                    >
                                                        {_.get(item, 'categoryName')}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} my={'25px'}>
                        <Box sx={{ borderRadius: '16px', background: '#F5F5F5', height: '180px' }}>
                            <img
                                src={banner1}
                                alt=""
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} my={'25px'}>
                        <Box sx={{ borderRadius: '16px', background: '#F5F5F5', height: '180px' }}>
                            <img
                                src={banner2}
                                loading="lazy"
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} my={'25px'}>
                        <Box sx={{ borderRadius: '16px', background: '#F5F5F5', height: '180px' }}>
                            <img
                                src={banner3}
                                loading="lazy"
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} my={'25px'}>
                        <Box sx={{ borderRadius: '16px', background: '#F5F5F5', height: '180px' }}>
                            <img
                                src={banner4}
                                loading="lazy"
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} my={'25px'}>
                        <Box sx={{ borderRadius: '16px', background: '#F5F5F5', height: '180px' }}>
                            <img
                                src={banner5}
                                loading="lazy"
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default DetailContent;
