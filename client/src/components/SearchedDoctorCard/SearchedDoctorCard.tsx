import * as React from 'react';
import Box from '@mui/material/Box';
import {DocInfo, DocCalendar, ParentMap} from '../'
// import {ParentMap} from '../index'
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import s from './doctorcard.module.css'

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
            <Box className={s.containerCard} sx={{display: 'flex', minWidth: 250, maxWidth: 900} }>
                <DocInfo props={props}/>
                <DocCalendar props={props}/>
        </Box>
            </>
    );
}