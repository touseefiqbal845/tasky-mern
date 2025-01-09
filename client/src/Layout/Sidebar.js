import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import { IoIosAnalytics } from "react-icons/io";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { Image } from "@mui/icons-material";
import logo from "../assets/logo.png";
import { Box } from "@mui/material";
import WorkspaceSelector from "../components/Textfieldselector";

const drawerWidth = 240;

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
  width: `calc(${theme.spacing(7)} + 20px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 20px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  justifyContent: "space-between",
  // width: '100%',
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));

const pageIcons = {
  Dashboard: <DashboardIcon />,
  Analytic: <AnalyticsIcon />,
  Timesheets: <AccessTimeIcon />,
  Todo: <AssignmentTurnedInIcon />,
  Report: <AssessmentIcon />,
  Settings: <SettingsIcon />,
};
const DrawerComponent = ({ open, handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: open ? 50 : 40,
            height: open ? 15 : 10,
            marginLeft: open ? 5 : 0,
          }}
        />
        <IconButton onClick={handleDrawerClose}>
          {open ? <MenuIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
      {["Dashboard", "Analytic", "Timesheets", "Todo", "Report", "Settings"].map((text) => (
        <ListItem key={text} sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              px: 2.5,
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
              "&:hover .MuiSvgIcon-root": {
                color: "white",
              },
              justifyContent: open ? "initial" : "center",
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
                color: "inherit",
                "& .MuiSvgIcon-root": {
                  color: "inherit",
                },
              }}
            >
              {pageIcons[text]}
            </ListItemIcon>
            <ListItemText
              primary={text}
              sx={{
                opacity: open ? 1 : 0,
                color: "inherit",
                marginLeft:  open ? "25px" : "0px",
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
      <Divider />
      {open && <WorkspaceSelector />}


     

    </Drawer>
  );
};

export default DrawerComponent;
