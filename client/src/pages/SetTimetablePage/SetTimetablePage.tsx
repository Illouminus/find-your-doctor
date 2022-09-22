import React, {useEffect, useState} from 'react'
import Timetable from "../../components/TimeTable/Timetable";
import {Box} from "@mui/material";


const SetTimetablePage = () => {
    return (
        <Box sx={{ml:'auto', mr:'auto'}}>
        <Timetable></Timetable>
        </Box>
    )
}

export default SetTimetablePage