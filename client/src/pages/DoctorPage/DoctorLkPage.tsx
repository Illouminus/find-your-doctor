import React, { useState, useEffect} from 'react'
import userStyle from '../UserLkPage/userStyle.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import axios from "axios";
import { IUser } from '../../models/iUser';
import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';

export interface DoctorLkState {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  telephone: string;
  experience: string;
  education: string;
  sex: string;
  photo: string; 
  is_activated: boolean;
}

const DoctorLkPage = () => {

  const user : IUser = useTypedSelector(state => state.user.user)
  
  const [ doctorLk, setDoctorLk ] = useState<DoctorLkState>();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/doctor/lk/${user.id}`)
      .then((resFromServer) => {
      const data = resFromServer.data;
      setDoctorLk(data);
    });
  }, []);

  const updateUser = (e: any) => {
    e.preventDefault();
    const valueName = e.target.first_name.value
    const valueLastName = e.target.last_name.value
    const valueEmail = e.target.email.value
    const valueTelephone = e.target.telephone.value
    try {
      axios.post(`http://localhost:4000/api/user/${user.id}`, 
      { first_name: valueName, last_name: valueLastName, email: valueEmail, telephone: valueTelephone
    }).then((resFromServer) => {
      const data = resFromServer.data
      setDoctorLk(data);
      console.log("LOX", data);
    })
    } catch (error) {
     console.log(error) 
    }
  } 

  return (
    <Card className={userStyle.card}
      variant="outlined"
      sx={{
        minWidth: "320px",
        minHeight: "120px",
        gap: 2,
        display: "flex",
        border: "none",
      }}
    >
      <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
      >
        {doctorLk?.first_name[0]}
        {doctorLk?.last_name[0]}
      </Avatar>
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
           {doctorLk?.first_name} {doctorLk?.last_name}
          </Typography>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
           Email: {doctorLk?.email}
          </Typography>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
          Номер Телефона:{doctorLk?.telephone}
          </Typography>
        </Box>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Изменить данные
      </Button>
      </Box>
      <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
      <form onSubmit={updateUser}>
        <DialogTitle id="form-dialog-title">Изменить данные:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Чтобы поменять данные, сохраните изменения
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="first_name"
            label="Имя"
            type="text"
            fullWidth
            defaultValue={doctorLk?.first_name}
          />
          <TextField
            autoFocus
            margin="dense"
            name="last_name"
            label="Фамилия"
            type="text"
            fullWidth
            defaultValue={doctorLk?.last_name}
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            defaultValue={doctorLk?.email}
          />
          <TextField
            autoFocus
            margin="dense"
            name="telephone"
            label="Номер телефона"
            type="text"
            fullWidth
            defaultValue={doctorLk?.telephone}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button type='submit' onClick={handleClose} color="primary" >
            Сохранить
          </Button>
        </DialogActions>
      </form>
      </Dialog>
    </div>
    </Card>
  )
}

export default DoctorLkPage;
