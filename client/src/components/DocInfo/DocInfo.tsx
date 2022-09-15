import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import {CardActions, Avatar} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {deepOrange, deepPurple, indigo, blue, teal, green, lime, orange, yellow, blueGrey} from '@mui/material/colors';
import {NavLink} from 'react-router-dom'
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
    console.log(props.props.el)
    const {id, email, photo, sex, experience, first_name, last_name, speciality} = props.props.el
    console.log(id,email, photo, sex, experience, )
    return (
        <>
            <div>
                <Card sx={{ minWidth: 275, maxWidth: 309}}>
                    <CardContent>
                        <Box sx = {{display:'flex'}}>
                            <Avatar sx={{ bgcolor: pickRandomColor()[500] }}>{first_name[0]}{last_name[0]} </Avatar>
                            <br/>
                            <Typography variant="h5" component="div">
                            <NavLink to={`/doctor/${id}`}>{first_name} {last_name} </NavLink>
                            </Typography>
                        </Box>
                        <br/>
                        <Typography sx={{ fontSize: 14 }}  gutterBottom>
                            {speciality}     {sex}
                        </Typography>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Опыт
                        </Typography>
                        <Typography variant="body2">
                            {experience} awdawdawdawdawdawdwadawdawdawdawdawdawdawdawdawdawdawdawdawdawdawdaw awdawdawdawd awdawdawdawd awdawdawdawd awdawd awdawdawdkbawdkabdw
                            <br />

                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </>
    );
}