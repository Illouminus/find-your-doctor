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
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
