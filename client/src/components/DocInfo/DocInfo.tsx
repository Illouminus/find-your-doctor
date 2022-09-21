import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Avatar} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {deepOrange, deepPurple, indigo, blue, teal, green, lime, orange, yellow, blueGrey} from '@mui/material/colors';
import {NavLink} from 'react-router-dom'
import {TagsCard} from "../index";
import s from './docinfo.module.css'

function pickRandomColor (){
    const colors:any[]=[deepOrange, deepPurple, indigo, blue, teal, green, lime, orange, yellow, blueGrey]
    return colors[Math.floor((Math.random()*colors.length))]
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function DocInfo(props:any) {
    const {id, email, photo, sex, experience, first_name, last_name, speciality, tags} = props.props.el
    return (
        <>

                <Card sx={{ minWidth: 250, maxWidth: 250, mr:2, border: "none", boxShadow: "none"}}>
                    <CardContent>
                        <Box sx = {{display:'flex'}}>
                            <Avatar sx={{ bgcolor: pickRandomColor()[500] }}>{first_name[0]}{last_name[0]} </Avatar>
                            <br/>
                            <Typography variant="h5" component="div" className={s.docNameDiv}>
                            <NavLink to={`/doctor/${id}`} className={s.docName}>{first_name} {last_name} </NavLink>
                            </Typography>
                        </Box>
                        <br/>
                        <Typography sx={{ fontSize: 14 }}  gutterBottom>
                            {speciality}     {sex}
                        </Typography>
                        {/*<TagsCard ></TagsCard>*/}
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Опыт
                        </Typography>
                        <Typography variant="body2">
                            {experience} awdawdaw dawdawdaw dwadawdaw dawdawdawdaw dawdawdawdawda wdawdawdawdawdaw awdawdawdawd awdawdawdawd awdawdawdawd awdawd awdawdawdkbawdkabdw
                            <br />

                        </Typography>
                    </CardContent>

                </Card>

        </>
    );
}