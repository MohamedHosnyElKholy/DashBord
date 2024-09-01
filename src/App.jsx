import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";
import Layout from "./components/Layout/Layout";
import Dashbord from './components/DahBord/Dashbord';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
import Blances from './components/Blances/Blances';
import Profile from './components/Profile/Profile';
import Clender from './components/Clender/Clender';
import Faq from './components/Faq/Faq';
import BarChart from './components/Barchart/Barchart';
import PieChart from './components/PieChart/PieChart';
import LineChart from './components/LineChart/LineChart';
import GhoraphyChart from './components/GhoraphyChart/GhoraphyChart';
import { Box } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [themeMode, setThemeMode] = React.useState(localStorage.getItem('currentMode') || 'light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    localStorage.setItem('currentMode', themeMode === "light" ? "dark" : "light");
  };

  const theme = themeMode === "light" ? lightTheme : darkTheme;

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const router = createBrowserRouter([
    {
      path: '/', 
      element: <Layout 
                 open={open} 
                 handleDrawerOpen={handleDrawerOpen} 
                 handleDrawerClose={handleDrawerClose} 
                 toggleTheme={toggleTheme} 
                 themeMode={themeMode} 
               />, 
      children: [
        { path: '/', element: <Dashbord /> },
        { path: '/dahbord', element: <Dashbord /> },
        { path: '/team', element: <Team /> },
        { path: '/contact', element: <Contact /> },
        { path: '/blancs', element: <Blances /> },
        { path: '/profile', element: <Profile /> },
        { path: '/celender', element: <Clender /> },
        { path: '/faq', element: <Faq /> },
        { path: '/barchart', element: <BarChart /> },
        { path: '/piechart', element: <PieChart /> },
        { path: '/linechart', element: <LineChart /> },
        { path: '/gegohraphychart', element: <GhoraphyChart /> },
      ]
    }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
