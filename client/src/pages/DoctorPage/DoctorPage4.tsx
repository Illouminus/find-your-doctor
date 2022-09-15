import { Box, Card, Typography } from "@mui/material";
import * as React from "react";
import { DocState } from "./DoctorPage";

export default function DoctorPage4({ el }: { el: DocState }) {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: "420px",
        gap: 2,
        display: "flex",
        border: "none",
      }}
    >
      <Box>
        <Box sx={{ ml: 0.5, display: "contents" }}>
          <Typography
            fontSize="20px"
            id="card-description"
            mb={0.5}
            align="justify"
          >
            {el.experience}
            Задача организации, в особенности же дальнейшее развитие различных
            форм деятельности влечет за собой процесс внедрения и модернизации
            существенных финансовых и административных условий. Равным образом
            сложившаяся структура организации требуют от нас анализа направлений
            прогрессивного развития. Равным образом укрепление и развитие
            структуры представляет собой интересный эксперимент проверки форм
            развития.
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
