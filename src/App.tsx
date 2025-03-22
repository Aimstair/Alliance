import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListIcon from "@mui/icons-material/List";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
import DetailIcon from "@mui/icons-material/Details";
import HomeIcon from "@mui/icons-material/Home";
import AppBar from "./views/components/AppBar";
import Main from "./views/components/Main";
import DrawerHeader from "./views/components/DrawerHeader";
import SideBarMenu  from "./views/components/SideBarMenu";
import AppRoutes from "./Routes";

const drawerWidth = 240;

const App = () => {
  const pages = [{
    to: "/login",
    text: "Login",
    icon: <LoginIcon />
  }, {
    to: "/",
    text: "ClickCounter",
    icon: <HomeIcon />
  },{
    to: "/employee",
    text: "Employee List",
    icon: <ListIcon />
  }, {
    to: "/employee/add",
    text: "Employee Form",
    icon: <AddIcon />
  }, {
    to: "/employee/detail",
    text: "Employee Details",
    icon: <DetailIcon />
  }];

  const [open, setOpen] = React.useState(false);

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return  (
    <Box sx={{ display: "flex" }}>
      <AppRoutes/>
    </Box>
  );
};

export default App;
