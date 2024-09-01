import { Box, Typography, useTheme } from "@mui/material";
import Barcomopnnents from "../Barchart/Barcomopnnents";

export default function Barchart() {
  let theme = useTheme();
  return (
    <>
     <Box sx={{ padding: 1 }}>
        <Typography variant="h4" sx={{ color: "#1976d2" }} gutterBottom>
        Bar Chart
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
        >
          The minimum wage in Germany, France and Spain (EUR/month)
        </Typography>
      </Box>
      <Barcomopnnents />
    </>
  );
}
