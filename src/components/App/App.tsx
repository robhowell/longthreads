import * as React from "react";
import { styled, ThemeProvider, useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiAppBar, {
  AppBarProps as MuiAppBarProps,
} from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import DoneIcon from "@material-ui/icons/Done";
import TodayIcon from "@material-ui/icons/Today";
import { createTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "react-responsive";
import CheckboxList from "../Checklist/Checklist";

const drawerWidth = 240;

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#3a4c7b",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Noto Sans JP",
  },
};

const longThreadsTheme = createTheme(themeOptions);

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const App = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const toggleIsMobileOpen = () => setIsMobileOpen(!isMobileOpen);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleDrawerOpen = () => {
    setOpen(true);
    toggleIsMobileOpen();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    toggleIsMobileOpen();
  };

  const drawerContent = (
    <>
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

      <List>
        <List>
          <ListItem button>
            <ListItemIcon>
              <TodayIcon />
            </ListItemIcon>

            <ListItemText primary="Today" />
          </ListItem>
        </List>

        <List>
          <ListItem button>
            <ListItemIcon>
              <DoneIcon />
            </ListItemIcon>

            <ListItemText primary="Example project" />
          </ListItem>
        </List>

        <List>
          <ListItem button>
            <ListItemIcon>
              <DoneAllIcon />
            </ListItemIcon>

            <ListItemText primary="All" />
          </ListItem>
        </List>
      </List>

      <Divider />

      <List>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>

          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </>
  );

  const container =
    typeof window !== "undefined" ? () => window?.document?.body : undefined;

  return (
    <>
      <CssBaseline />

      <Box sx={{ display: "flex" }}>
        <ThemeProvider theme={longThreadsTheme}>
          <AppBar position="fixed" open={isMobile ? isMobileOpen : open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(!isMobile && open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" noWrap component="h1">
                Today
              </Typography>
            </Toolbar>
          </AppBar>

          {isMobile ? (
            <Drawer
              container={container}
              variant="temporary"
              open={isMobileOpen}
              onClose={toggleIsMobileOpen}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawerContent}
            </Drawer>
          ) : (
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
              {drawerContent}
            </Drawer>
          )}

          <Main open={isMobile ? isMobileOpen : open}>
            <DrawerHeader />
            <CheckboxList />
          </Main>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default App;
