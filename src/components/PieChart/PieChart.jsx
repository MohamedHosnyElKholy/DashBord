import Piecomponents from './Piecomponents'
import { Box, Typography, useTheme } from "@mui/material";

export default function PieChart() {
  let theme = useTheme();
  return (
    <>
      <Box sx={{ padding: 1 }}>
        <Typography variant="h4" sx={{ color: "#1976d2" }} gutterBottom>
        Pie Chart
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
        >
          Simple Pie Chart
        </Typography>
      </Box>
    <Piecomponents/>
    </>
  )
}
