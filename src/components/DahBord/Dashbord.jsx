import React from "react";
import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import PieChartDashComm from "../DahBord/PieChartDashComm";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChartDash from "../DahBord/LineChartDash";
import GhorAphycomm from '../DahBord/GhorAphycomm'
export default function Dashboard() {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px",
          backgroundColor: theme.palette.background.default,
          borderRadius: "8px",
          marginBottom: "20px", // Added margin bottom for spacing
        }}
      >
        <Box sx={{ padding: "16px" }}>
          <Typography
            variant="h4"
            sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
            gutterBottom
          >
            DASHBOARD
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.mode === "dark" ? "#fff" : "#555",
              marginTop: "8px",
            }}
          >
            Welcome to your dashboard
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
              padding: "8px 16px",
              borderRadius: "8px",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0px 4px 10px rgba(0,0,0,0.3)"
                  : "0px 4px 10px rgba(0,0,0,0.2)",
            }}
            startIcon={<FileDownloadIcon />}
          >
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Paper
          sx={{
            minWidth: "300px",
            minHeight: "300px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
            backgroundColor: theme.palette.background.paper,
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            border: "2px solid #ccc",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <EmailIcon
              sx={{ fontSize: "48px", color: theme.palette.primary.main }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginTop: "8px" }}
            >
              12,361
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary, marginTop: "4px" }}
            >
              Emails Sent
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PieChartDashComm />
            <Typography
              variant="h6"
              sx={{ color: theme.palette.success.main, marginTop: "8px" }}
            >
              +14%
            </Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            minWidth: "300px",
            minHeight: "300px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
            backgroundColor: theme.palette.background.paper,
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            border: "2px solid #ccc",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LocalPhoneIcon
              sx={{ fontSize: "48px", color: theme.palette.primary.main }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginTop: "8px" }}
            >
              431,225
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary, marginTop: "4px" }}
            >
              Sales obtained
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PieChartDashComm />
            <Typography
              variant="h6"
              sx={{ color: theme.palette.success.main, marginTop: "8px" }}
            >
              +21%
            </Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            minWidth: "300px",
            minHeight: "300px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
            backgroundColor: theme.palette.background.paper,
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            border: "2px solid #ccc",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PersonIcon
              sx={{ fontSize: "48px", color: theme.palette.primary.main }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginTop: "8px" }}
            >
              32,441
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary, marginTop: "4px" }}
            >
              New Clients
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PieChartDashComm />
            <Typography
              variant="h6"
              sx={{ color: theme.palette.success.main, marginTop: "8px" }}
            >
              +5%
            </Typography>
          </Box>
        </Paper>
      </Stack>
      <Paper
        sx={{
          Width: "100%",
          minHeight: "200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: theme.palette.background.paper,
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          border: "2px solid #ccc",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TrafficIcon
            sx={{ fontSize: "48px", color: theme.palette.primary.main }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginTop: "8px" }}
          >
            1,325,134
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary, marginTop: "4px" }}
          >
            Traffic Received
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <PieChartDashComm />
          <Typography
            variant="h6"
            sx={{ color: theme.palette.success.main, marginTop: "8px" }}
          >
            +43%
          </Typography>
        </Box>
      </Paper>
      <Stack
        direction={"row"}
        sx={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: 'space-between' }}
      >
        <Paper
          sx={{
            minWidth: "60%",
            // minHeight: "100px",
            padding: "20px",
            marginTop: "20px",
            border: "2px solid #ccc",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <h1>Revenue Generated</h1>
              <p>$59,342.32</p>
            </Box>
            <Box>
              <FileDownloadIcon />
            </Box>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <LineChartDash />
          </Box>
        </Paper>
        <Paper
          sx={{
            minWidth: "25%",
            minHeight: "100px",
            padding: "20px",
            marginTop: "20px",
            border: "2px solid #ccc",
            borderRadius: "8px", // Optional: for rounded corners
            boxShadow: 1, // Optional: for shadow effect
          }}
        >
          <Typography variant="h5" gutterBottom>
            Recent Transactions
          </Typography>
          <Box>
            {[1, 2, 3].map((_, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center", // Align items vertically centered
                  padding: "10px 0", // Add padding between rows
                  borderBottom: index < 2 ? "1px solid #ccc" : "none", // Add border between rows
                }}
              >
                <Box>
                  <Typography variant="body2">01e4dsaewf</Typography>
                  <Typography variant="body2">johndoe</Typography>
                </Box>
                <Box>
                  <Typography variant="body2">2021-09-01</Typography>
                </Box>
                <Box>
                  <Button variant="contained">$43.91</Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      </Stack>
      <Stack direction={'row'} sx={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: 'space-between' }}>
        <Paper sx={{border: '2px solid #ccc', width: '100%', marginTop: '20px'}}>
          <GhorAphycomm/>
        </Paper>
      </Stack>
    </>
  );
}
