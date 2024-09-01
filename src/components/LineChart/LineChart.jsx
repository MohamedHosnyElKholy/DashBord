import React from 'react'
import Linecomponents from './Linecomponents'
import { Box, Typography, useTheme } from "@mui/material";

export default function LineChart() {
  let theme = useTheme();
  return (

    <>
    <Box sx={{ padding: 1 }}>
        <Typography variant="h4" sx={{ color: "#1976d2" }} gutterBottom>
        Line Chart
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
        >
          Simple Line Chart
        </Typography>
      </Box>
    <Linecomponents/>
    </>
  )
}
