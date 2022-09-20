import * as React from 'react';
import Box from '@mui/material/Box';
import {DocInfo, DocCalendar} from '../'
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import {styled} from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


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
            <Box sx={{display: 'flex', minWidth: 250, maxWidth: 500}}>
                <DocInfo props={props}/>
                <DocCalendar props={props}/>

        </Box>

            </>
    );
}