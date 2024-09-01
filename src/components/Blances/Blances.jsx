import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "../Contact/data";
import { Box, Typography, useTheme } from "@mui/material";

export default function Blances() {
  let theam = useTheme();
  const columns = [
    { field: 'id', headerName: 'ID', width: 70, flex: 1 },
    { field: 'register', headerName: 'Register', width: 150, flex: 1 },
    { field: 'name', headerName: 'Name', width: 150, flex: 1 },
    { field: 'age', headerName: 'Age', width: 70, flex: 1 },
    { field: 'phone', headerName: 'Phone', width: 150, flex: 1 },
    { field: 'email', headerName: 'Email', width: 200, flex: 1 },  // تأكد من هذا الحقل
    { field: 'address', headerName: 'Address', width: 200, flex: 1 },
    { field: 'city', headerName: 'City', width: 150, flex: 1 },
    { field: 'code', headerName: 'Code', width: 100, flex: 1 },
  ];

  return (
    <>
      <Box sx={{ padding: 1 }}>
        <Typography variant="h4" sx={{ color: "#1976d2" }} gutterBottom>
        CONTACTS
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theam.palette.mode === "dark" ? "#fff" : "#000",
          }}
        >
          List of Contacts for Future Reference
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
        <DataGrid
        checkboxSelection
         rows={rows} columns={columns} />
      </div>
    </>
  );
}
