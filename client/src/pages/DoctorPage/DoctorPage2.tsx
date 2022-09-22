import { Box, Card, Typography } from "@mui/material";
import * as React from "react";
import { DocState } from "./DoctorPage";

export default function DoctorPage2({ el }: { el: DocState }) {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: "420px",
        gap: 2,
        display: "contents",
      }}
    >
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography fontSize="25px" id="card-description" mb={0.5}>
            {el?.adress}
            {el?.experience}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
