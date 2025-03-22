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
import DetailIcon from "@mui/icons-material/Details";
import HomeIcon from "@mui/icons-material/Home";
import AppBar from "../../components/AppBar";
import Main from "../../components/Main";
import DrawerHeader from "../../components/DrawerHeader";
import SideBarMenu from "../../components/SideBarMenu";
import AppRoutes from "../../../Routes";
import { Outlet } from "react-router";

const drawerWidth = 240;

export const Mainpage = () => {
    const pages = [{
        to: "/",
        text: "Home",
        icon: <HomeIcon />
      }, {
        to: "/clicker",
        text: "Clicker",
        icon: <ListIcon />
      }, {
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

    return ( 
        <>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  mr: 2,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Alliance Reactjs Basecode
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <SideBarMenu pages={pages} />
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          {/* <AppRoutes /> */}
  
          <Outlet />
        </Main>
        </>
    );
  }