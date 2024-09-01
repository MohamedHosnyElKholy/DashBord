import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import image1 from "../../assets/png-transparent-cartoon-child-illustration-cartoon-children-cartoon-character-child-photography.png";
import { Avatar, Box, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import TimelineIcon from "@mui/icons-material/Timeline";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const iconWidth = 48; // Adjust this value based on your icon size and padding

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: iconWidth,
  [theme.breakpoints.up("sm")]: {
    width: iconWidth,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const arr1 = [
  { text: "Dashboard", path: "/", icon: <HomeIcon /> },
  { text: "Manage Team", path: "/team", icon: <PeopleIcon /> },
  { text: "Contacts Information", path: "/contact", icon: <ContactsIcon /> },
  { text: "Invoices Balances", path: "/blancs", icon: <ReceiptIcon /> },
];
const arr2 = [
  { text: "Profile Form", path: "/profile", icon: <PersonIcon /> },
  { text: "Calendar", path: "/celender", icon: <CalendarTodayIcon /> },
  { text: "FAQ Page", path: "/faq", icon: <LiveHelpIcon /> },
];
const arr3 = [
  { text: "Bar Chart", path: "/barchart", icon: <BarChartIcon /> },
  { text: "Pie Chart", path: "/piechart", icon: <PieChartOutlineIcon /> },
  { text: "Line Chart", path: "/linechart", icon: <TimelineIcon /> },
  {text: "Geography Chart", path: "/gegohraphychart", icon: <PivotTableChartIcon />,},
];
export default function Sidebar({ open, handleDrawerClose }) {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          p={2}
        >
          <Avatar alt="dashboard" src={image1} sx={{ width: 56, height: 56 }} />
          <Typography variant="body1" component="p">
            Mohamed
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Admin
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        {arr1.map(({ text, path, icon }) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to={path} // Correctly use the path from the arr1 objects
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
      {arr2.map(({ text, path, icon }) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to={path}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {arr3.map(({text, path, icon}) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to={path}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                },
                open
                  ? {
                      justifyContent: "initial",
                    }
                  : {
                      justifyContent: "center",
                    },
              ]}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: "center",
                  },
                  open
                    ? {
                        mr: 3,
                      }
                    : {
                        mr: "auto",
                      },
                ]}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={[
                  open
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
