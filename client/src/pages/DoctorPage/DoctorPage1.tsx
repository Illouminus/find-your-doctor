import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import * as React from "react";
import { RatingDoc } from "../../components";
import { DocState } from "./DoctorPage";

export default function DoctorPage1({ el }: { el: DocState }) {
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
      <Avatar
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100 }}
      >
        {el?.first_name[0]}
        {el?.last_name[0]}
      </Avatar>
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
            {el?.first_name} {el?.last_name} {el?.patronymic}
          </Typography>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
            {el?.speciality}
          </Typography>
        </Box>
        <Button variant="contained" color="success">
          Добавить в Мои врачи
        </Button>
        <RatingDoc />
      </Box>
    </Card>
  );
}
