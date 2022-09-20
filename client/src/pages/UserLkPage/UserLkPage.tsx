import React, { useState, useEffect} from 'react'
import userStyle from "./userStyle.module.css"
import { useTypedSelector } from '../../hooks/useTypedSelector';
import axios from "axios";
import { IUser } from '../../models/iUser';
import { Avatar, Box, Button, Card, Typography } from '@mui/material';

export interface UserLkState {
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

const UserLkPage = () => {

  const user : IUser = useTypedSelector(state => state.user.user)
  
  const [ userLk, setUserLk ] = useState<UserLkState>();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/user/${user.id}`)
      .then((resFromServer) => {
      const data = resFromServer.data;
      setUserLk(data);
    });
  }, []);

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
        {userLk?.first_name[0]}
        {userLk?.last_name[0]}
      </Avatar>
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
           {userLk?.first_name} {userLk?.last_name}
          </Typography>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
           Email: {userLk?.email}
          </Typography>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
          Номер Телефона:{userLk?.telephone}
          </Typography>
        </Box>
        <Button variant="contained" color="success">
          Изменить
        </Button>
      </Box>
    </Card>
  )
}

export default UserLkPage;
