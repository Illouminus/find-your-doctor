import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {IUser} from "../../models/iUser";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FileUpload, Upload} from '../'
import axios from "axios";
import {useState} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";


// @ts-ignore

export default function ModalAppointment({props}) {
    const [handleClickOpen, handleClose, openModal, id, first_name, last_name, {date, time}, speciality, patronymic] = props
    const user : IUser = useTypedSelector(state => state.user.user)
    const [comment, setComment] = useState('')
    const [firstTime, setFirstTime] = useState(true)
    const sendFormHandler = async ()=> {
    try{
        const response = axios.post('http://localhost:4000/appointment', {
            doctor_id: id,
            user_id: user.id,
            time:time,
            date:date,
            comment: comment,
            firstTime:firstTime,
        })
        const feedback = await response
        if (feedback.data){
            console.log(feedback.data)
        }}catch(e){
        console.log(e)
    }
    }

    
    return (
        <div>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>Запись на {time}:00 {date.slice(8,10)}.{date.slice(5,7)}  {date.slice(0,4)}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Врач-{speciality}: {last_name} {first_name} {patronymic}
                    </DialogContentText>
                    <DialogContentText>
                        Пациент: {user.last_name} {user.first_name}
                    </DialogContentText>
                    <DialogContentText>
                        Email для связи : {user.email}
                    </DialogContentText>
                    <FormControlLabel onClick ={()=>setFirstTime(!firstTime)}
                     control={<Checkbox defaultChecked />} label="Первичный приём" />
                    <TextField
                        onChange = {(e:any)=> setComment(e.target.value)}
                        name='comment'
                        rows={4}
                        multiline
                        autoFocus
                        margin="dense"
                        id="name"
                        label="комментарий, жалобы"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    {/* <FileUpload/> */}
                <Upload id={user.id}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отменить</Button>
                    <Button onClick={sendFormHandler}>Подтвердить запись</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}