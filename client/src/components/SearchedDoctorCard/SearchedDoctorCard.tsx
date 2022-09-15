import * as React from 'react';
import Box from '@mui/material/Box';
import {DocInfo} from '../'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function SearchedDoctorCard(props:any) {
    return (
        <>
            <div>
        <DocInfo props={props}/>
        </div>
            </>
    );
}