import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import * as React from "react";
import { RatingDoc } from "../../components";
import { DocState } from "./DoctorPage";
import { deepOrange, deepPurple, indigo, blue, teal, green, lime, orange, yellow, blueGrey } from '@mui/material/colors';

function pickRandomColor() {
  const colors: any[] = [deepOrange, deepPurple, indigo, blue, teal, green, lime, orange, yellow, blueGrey]
  return colors[Math.floor((Math.random() * colors.length))]
}

export default function DoctorPage1({ el }: { el: DocState }) {
  console.log('el', el);
  
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: "320px",
        minHeight: "120px",
        gap: 2,
        display: "flex",
        border: "none",
      }}
    >
      {el.photo ? (
        <Avatar src={`/img/${el.photo}`} sx={{ width: 100, height: 100 }} />
      ) : (
        <Avatar
            sx={{ width: 100, height: 100, bgcolor: pickRandomColor()[500] }}
      >
        {el?.last_name[0]}
        {el?.first_name[0]}
      </Avatar>  
      )}
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
            {el?.last_name} {el?.first_name} {el?.patronymic}
          </Typography>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
            {el?.speciality}
          </Typography>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
            {el?.education}
          </Typography>
        </Box>
        {/* <Button variant="contained" color="success">
          Добавить в Мои врачи
        </Button> */}
        <RatingDoc el = {el} />
      </Box>
    </Card>
  );
}
