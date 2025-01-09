import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import SearchBar from "../components/Searchfield";
import Box from "@mui/material/Box";

const drawerWidth = 240;
const collapsedDrawerWidth = 85;

const StyledAppBar = styled(MuiAppBar)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "none",
  marginLeft: open ? drawerWidth : collapsedDrawerWidth,
  width: open
    ? `calc(100% - ${drawerWidth}px)`
    : `calc(100% - ${collapsedDrawerWidth}px)`,
  backgroundColor: "#FFFFFF",
}));

const AppBarComponent = ({ open, handleDrawerClose }) => (
  <StyledAppBar position="fixed" open={open}>
    <Toolbar
      sx={{
        justifyContent: "space-between",
      }}
    >
      {/* <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerClose}
        edge="start"
        sx={{ marginRight: 5, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton> */}

      <Typography
        noWrap
        sx={{ color: "black", fontWeight: "bold",fontSize:"20px" }}
      >
        Dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
  <SearchBar
        iconPosition="end"
        backgroundColor="#d8d8d8"
        placeholder="Search Project"
        showIcon={true}
      />
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        sx={{ color: "black" }}
      >
        <Badge
          badgeContent={17}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#FABB18",
              color: "black",
            },
          }}
        >
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, color: "#000000", fontSize: "10px" }}
          >
            Manjay Gupta
          </Typography>
          <Typography variant="body2" color="#8F8F8F" sx={{ fontSize: "7px" }}>
            UX/UI Designer
          </Typography>
        </Box>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          sx={{ p: 0 }}
        >
          <Avatar
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1735812849~exp=1735816449~hmac=5450924722b556afdf49023217f79eefeeff19674beba27394a842fc394b7979&w=740"
            alt="Dummy Profile"
            sx={{
              width: 40,
              height: 40,
            }}
          />
        </IconButton>
      </Box>
      </Box>
    
    </Toolbar>
  </StyledAppBar>
);

export default AppBarComponent;
