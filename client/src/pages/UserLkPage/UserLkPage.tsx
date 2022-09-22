import React, { useState, useEffect } from "react";
import userStyle from "./userStyle.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import axios from "axios";
import { IUser } from "../../models/iUser";
import { pickRandomColor } from '../../components/Appointments/AllAppointments'
import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

export interface UserLkState {
  id: string;
  email: string;
  first_name: string | any;
  last_name: string;
  patronymic: string;
  telephone: string;
  experience: string;
  education: string;
  speciality: string;
  sex: string;
  photo: string;
  is_activated: boolean;
}

const UserLkPage = () => {
  const user: IUser = useTypedSelector((state) => state.user.user);
  const isDoctor = user.isDoctor;

  const [userLk, setUserLk] = useState<UserLkState>();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    isDoctor
      ? axios
          .get(`http://localhost:4000/doctor/lk/${user.id}`)
          .then((resFromServer) => {
            const data = resFromServer.data;
            console.log(data);
            setUserLk(data);
          })
      : axios
          .get(`http://localhost:4000/api/user/${user.id}`)
          .then((resFromServer) => {
            const data = resFromServer.data;
            setUserLk(data);
          });
  }, []);

  const updateUser = (e: any) => {
    e.preventDefault();
    const valueName = e.target.first_name.value;
    const valueLastName = e.target.last_name.value;
    const valueEmail = e.target.email.value;
    const valueTelephone = e.target.telephone.value;
    const valueSex = e.target.sex.value;
    const valueSpeciality = e.target.speciality.value;
    const valueEducation = e.target.education.value;
    const valueExperience = e.target.experience.value;
    try {
      isDoctor
        ? axios
            .post(`http://localhost:4000/doctor/lk/${user.id}`, {
              first_name: valueName,
              last_name: valueLastName,
              email: valueEmail,
              telephone: valueTelephone,
              sex: valueSex,
              speciality: valueSpeciality,
              education: valueEducation,
              experience: valueExperience,
            })
            .then((resFromServer) => {
              const data = resFromServer.data;
              setUserLk(data);
            })
        : axios
            .post(`http://localhost:4000/api/user/${user.id}`, {
              first_name: valueName,
              last_name: valueLastName,
              email: valueEmail,
              telephone: valueTelephone,
            })
            .then((resFromServer) => {
              const data = resFromServer.data;
              setUserLk(data);
            });
    } catch (error) {
      console.log(error);
    }
  };
  console.log('userLk', userLk);

  return (
    <>
      {isDoctor ? (
        <Card
          className={userStyle.card}
          variant="outlined"
          sx={{
            minWidth: "320px",
            minHeight: "120px",
            gap: 2,
            display: "flex",
            border: "none",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* <Avatar
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }}
              >
                {userLk?.first_name[0]}
                {userLk?.last_name[0]}
              </Avatar> */}
              {userLk?.photo ? (
                <Avatar src={`http://localhost:4000/img/${userLk?.photo}`} sx={{ width: 150, height: 150 }} />
              ) : (
                <Avatar
                  sx={{ width: 150, height: 150, bgcolor: pickRandomColor()[500] }}
                >
                  {userLk?.last_name[0]}
                  {userLk?.first_name[0]}
                </Avatar>
              )}
              <Box>
                <Box sx={{ ml: 0.5 }}>
                  <Typography fontSize="25px" id="card-description" mb={0.5}>
                    {userLk?.last_name} {userLk?.first_name}{" "}
                    {userLk?.patronymic}
                  </Typography>
                  <Typography fontSize="25px" id="card-description" mb={0.5}>
                    Email: {userLk?.email}
                  </Typography>
                  <Typography fontSize="25px" id="card-description" mb={0.5}>
                    Телефон: {userLk?.telephone}
                  </Typography>
                  <Typography fontSize="25px" id="card-description" mb={0.5}>
                    Образование: {userLk?.education}
                  </Typography>
                  <Typography fontSize="25px" id="card-description" mb={0.5}>
                    Специальность: {userLk?.speciality}
                  </Typography>
                  <Typography fontSize="25px" id="card-description" mb={0.5}>
                    Пол: {userLk?.sex}
                  </Typography>
                  <Typography fontSize="25px" id="card-description" mb={0.5}>
                    Опыт: {userLk?.experience}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="BOXBUUTON" sx={{ display: "grid" }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
              >
                Изменить данные
              </Button>
            </Box>
          </Box>
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <form onSubmit={updateUser}>
                <DialogTitle id="form-dialog-title">
                  Изменить данные:
                </DialogTitle>
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
                    defaultValue={userLk?.first_name}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="last_name"
                    label="Фамилия"
                    type="text"
                    fullWidth
                    defaultValue={userLk?.last_name}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="patronymic"
                    label="Отчество"
                    type="text"
                    fullWidth
                    defaultValue={userLk?.patronymic}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    defaultValue={userLk?.email}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="telephone"
                    label="Номер телефона"
                    type="text"
                    fullWidth
                    defaultValue={userLk?.telephone}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="sex"
                    label="Пол"
                    type="text"
                    fullWidth
                    defaultValue={userLk?.sex}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="speciality"
                    label="Специальность"
                    type="text"
                    fullWidth
                    defaultValue={userLk?.speciality}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="education"
                    label="Образование"
                    type="text"
                    fullWidth
                    defaultValue={userLk?.education}
                  />
                  <TextField
                    name="experience"
                    label="Опыт"
                    multiline
                    rows={2}
                    defaultValue={userLk?.experience}
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Отмена
                  </Button>
                  <Button type="submit" onClick={handleClose} color="primary">
                    Сохранить
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </div>
        </Card>
      ) : (
        <Card
          className={userStyle.card}
          variant="outlined"
          sx={{
            minWidth: "320px",
            minHeight: "120px",
            gap: 2,
            display: "flex",
            border: "none",
          }}
        >
          {/* <Avatar
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
          >
            {userLk?.first_name[0]}
            {userLk?.last_name[0]}
            </Avatar> */}
            {userLk?.photo ? (
              <Avatar src={`http://localhost:4000/img/${userLk?.photo}`} sx={{ width: 150, height: 150 }} />
            ) : (
              <Avatar
                sx={{ width: 150, height: 150, bgcolor: pickRandomColor()[500] }}
              >
                {userLk?.last_name[0]}
                {userLk?.first_name[0]}
              </Avatar>
            )}
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
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
            >
              Изменить данные
            </Button>
          </Box>
          <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <form onSubmit={updateUser}>
                <DialogTitle id="form-dialog-title">
                  Изменить данные:
                </DialogTitle>
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
                    defaultValue={userLk?.first_name}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="last_name"
                    label="Фамилия"
                    type="text"
                    fullWidth
                    defaultValue={userLk?.last_name}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="last_name"
                    label="Фамилия"
                    type="text"
                    fullWidth
                    defaultValue={userLk?.patronymic}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth
                    defaultValue={userLk?.email}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    name="telephone"
                    label="Номер телефона"
                    type="text"
                    fullWidth
                    defaultValue={userLk?.telephone}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Отмена
                  </Button>
                  <Button type="submit" onClick={handleClose} color="primary">
                    Сохранить
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </div>
        </Card>
      )}
    </>
  );
};

export default UserLkPage;
