import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";

export default function Team() {
  let theam = useTheme();
  const columns = [
    { field: "id", headerName: "ID", width: 70, flex: 1 },
    { field: "name", headerName: "Name", width: 150, flex: 1 },
    { field: "email", headerName: "Email", width: 200, flex: 1 },
    { field: "age", headerName: "Age", width: 70, flex: 1 },
    { field: "phone", headerName: "Phone", width: 150, flex: 1 },
    { field: "access", headerName: "Access Level", width: 130, flex: 1 },
  ];

  return (
    <>
      <Box sx={{ padding: 1 }}>
        <Typography variant="h4" sx={{ color: "#1976d2" }} gutterBottom>
          Team
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theam.palette.mode === "dark" ? "#fff" : "#000",
          }}
        >
          Managing the Team Members
        </Typography>
      </Box>
      <div
        style={{
          height: 550,
          width: "100%",
          overflowX: "auto",
          paddingTop: "30px",
        }}
      >
        <DataGrid rows={rows} columns={columns} />
      </div>
    </>
  );
}
