import { Box, Card, Chip, Typography } from "@mui/material";
import * as React from "react";
import { DocState } from "./DoctorPage";

export default function DoctorPage3({ el }: { el: DocState }) {
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
        <Box sx={{ ml: 0.5 }}>
          <Typography
            component={"span"}
            fontSize="20px"
            id="card-description"
            mb={0.5}
          >
            {el?.Tags?.map((e) => (
              <Chip key={e.id} label={e?.name} variant="outlined" />
            ))}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
