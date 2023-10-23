import { Typography } from '@mui/material';
import React from 'react';

const TitleBody = ({ title }) => {
    return (
        <>
            <Typography
                sx={{
                    fontSize: '20.5px',
                    fontWeight: '500',
                    color: '#de0b02',
                    px: '10px',
                    textTransform: 'uppercase',
                    marginLeft: '2px',
                    display: 'flex',
                    alignItems: 'baseline',
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        background: '#de0b02',
                        left: '0',
                        height: '16px',
                        width: '6px',
                        transform: 'translate(-50%, -50%)'
                    }
                }}
            >
                {title}
            </Typography>
        </>
    );
};

export default TitleBody;
