import React from "react";
import Ghorcomm from "../GhoraphyChart/Ghorcomm";

import { Box, Typography, useTheme } from "@mui/material";

export default function GhoraphyChart() {
  let theme = useTheme();

  return (
    <>
      <Box sx={{ padding: 1 }}>
        <Typography variant="h4" sx={{ color: "#1976d2" }} gutterBottom>
          Geography
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
        >
          Simple Geography Chart
        </Typography>
      </Box>
      <Ghorcomm />
    </>
  );
}
