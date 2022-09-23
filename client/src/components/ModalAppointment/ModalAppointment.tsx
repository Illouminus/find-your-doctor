import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {IUser} from "../../models/iUser";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {FileUpload, Upload} from '../'
import axios from "axios";
import {useState} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";
import { AnyNsRecord } from 'dns';
import { Preview } from '@mui/icons-material';
import { MessageUser } from '..';
import s from './modal.module.css'

// @ts-ignore

export default function ModalAppointment({props}) {
    const [handleClickOpen, handleClose, openModal, id, first_name, last_name, {date, time}, speciality, patronymic] = props
    const user : IUser = useTypedSelector(state => state.user.user)
    const [comment, setComment] = useState('')
    const [firstTime, setFirstTime] = useState(true)
    const [file, setFile]:any = useState<any>([])

    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = useState('');
    const [message, setMessage] = useState('');
    const handleCloseе = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    const navigate = useNavigate()
    
    const sendFormHandler = async ()=> {
      const data = new FormData();
      data.append("doctor_id", id)
      data.append("user_id", String(user.id))
      data.append("time",time)
      data.append("date", date)
      data.append("comment", comment)
      data.append("firstTime", String(firstTime))
      file.forEach((fileOne: any)=> data.append("file", fileOne))
      
    try{
        const response = axios.post('http://localhost:4000/appointment', data)
        const feedback = await response
        console.log(feedback);
        if (feedback.data){
          setSeverity('success')
          setMessage(feedback.data)
          setOpen(true)
          handleClose()
          setTimeout(() => {
            navigate('/')
          }, 1000)
            console.log()
        }}catch(e){
        console.log(e)
    }
    }

    return (
        <div className={s.container}>
            <Dialog open={openModal} onClose={handleClose} className={s.container}>
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
                        className={s.textArea}
                    />
                    {/* <FileUpload/> */}
                {/* <Upload id={user.id}/> */}
              <Button variant="contained" component="label">
                  Загрузить файл
               <input hidden  multiple type="file" onChange={(e): any | null=> {
                const files: any = e.target.files;
                Array.from(files).forEach(file => {
                  console.log(file)
                  setFile((prev: any) => [...prev, file]);
                })
                
               }}/>
              </Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отменить</Button>
                    <Button onClick={sendFormHandler}>Подтвердить запись</Button>
                </DialogActions>
            </Dialog>
            <MessageUser open={open} handleClose={handleCloseе} severity={severity} message={message}/>
        </div>
    );
}