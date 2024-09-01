import React from 'react';
import Sidebar from "../Sidebar/Sidebar";  // تأكد من استخدام المسار الصحيح للمكون
import TopBar from "../TopBar/TopBar";      // تأكد من استخدام المسار الصحيح للمكون
import { Outlet } from 'react-router-dom';
import { Box } from "@mui/material";

export default function Layout({ open, handleDrawerOpen, handleDrawerClose, toggleTheme, themeMode }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.text.primary,
          paddingTop: '64px',
          minHeight: '100vh',  // Ensure minimum height of 100vh
        }}
      >
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          toggleTheme={toggleTheme}
          mode={themeMode}
        />
        <Box
          sx={{
            minHeight: '100vh',  // Set the minHeight to 100vh
          }}
        >
          <Outlet />  
        </Box>
      </Box>
    </Box>
  );
}
