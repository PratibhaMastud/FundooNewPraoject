import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import InputBase from "@material-ui/core/InputBase";
import AddAlertIcon from '@material-ui/icons/AddAlert';
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import { List, ListItemIcon } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import EditIcon from '@material-ui/icons/Edit';
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import DeleteIcon from "@material-ui/icons/Delete";
import ArchiveIcon from "@material-ui/icons/Archive";
import NoteIcon from "@material-ui/icons/Note";
import Note from "../Dashboard/CreateNote";
import CreateNote from "../Note/CreateNote/Note";
import DisplayNote from "../Note/DisplayNote/DisplayNote";
import noteService from "../../Services/NoteServices";
import Button from '@material-ui/core/Button';
import "./Dashboard.scss";
import userService from '../../Services/UserService';
import Archive from '../Dashboard/ArchiveComponent/Archive';
import keep from '../../Assets/keep.png';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      backgroundColor: "#fff",
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    //width: `calc(100% - ${drawerWidth}px)`,
    witdth: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    color: "#202124cc",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    color: "#20212487",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  notesIcon: {
    display: "flex",
    justifyContent: "space beetween",
    marginLeft: theme.spacing(4),
    color: "#202124cc",
  },
  cheronIcon: {
    marginTop: theme.spacing(5),
    display: "flex",
    marginLeft: theme.spacing(18),
  },
  col: {
     color: "#202124cc",
    marginRight: theme.spacing(2),
  },
  list: {
    marginTop: theme.spacing(8),
  },
  searchCol: {
    color: "#202124cc",
  },
  logout: {
    width: "20%",
    height: "30%",

  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const getAllNotes = () => {
    noteService.getNote().then((response) => {
      console.log(response.data.data.data);
      let arr = response.data.data.data.filter((e) => e.isArchived === false && e.isDeleted === false);
      setAddItem(arr);
      console.log(arr);

    }).catch((error) => {
      console.log(error);
    });

  }

  useEffect(() => {
    console.log("Use Effect run");
    getAllNotes();
  }
    , [])


  const deleteRecord = (id) => {
    console.log(id);
    let data = {
      noteIdList: [id],
      isDeleted: true,
    }
    noteService.deleteNotes(data).then((response) => {
      console.log(response);
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const logoutfunction = () => {
    let token = localStorage.getItem('token');
    console.log(token);
    userService.logout(token).then((response) => {
      console.log(response);
      if (response.status === 204) {
        console.log(token);
        localStorage.setItem("token", "");
        props.history.push("/");
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (

    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      className={classes.logout}
    //className={classes.profile}
    >

      <div className="logout">
        <div>
          <Button onClick={logoutfunction}>Logout</Button>
        </div>
       
      </div>

    </Menu>

  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className="appbar-main">
        <AppBar
          position="fixed"
          backgroundColor="#fff"
          color="#fff"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon className={classes.col} />
              <img src={keep} alt="" />
            </IconButton>
            
            <Typography className={classes.title} variant="h6" noWrap>
              FUNDOO
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                className={classes.searchCol}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton>
                <ViewStreamIcon className={classes.col} />
              </IconButton>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle className={classes.col} />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List className={classes.list}>
          <ListItem button component={Link} to="/dashboard/note">
            <ListItemIcon>
              <EmojiObjectsIcon />
            </ListItemIcon>
            <ListItemText className={clsx(handleDrawerOpen)}>
              Notes
                    </ListItemText>
          </ListItem>
          <ListItem button>

            <ListItemIcon>
              <AddAlertIcon />
            </ListItemIcon>
            <ListItemText className={clsx(handleDrawerOpen)}>
              Reminders
                    </ListItemText>

          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText className={clsx(handleDrawerOpen)}>
              Edit labels
                    </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/dashboard/archive">
            <ListItemIcon>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText className={clsx(handleDrawerOpen)}>
              Archive
                    </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText className={clsx(handleDrawerOpen)}>
              Bin
                    </ListItemText>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <>
          {/* <CreateNote passNote={addNote}/> */}


          <Route path="/dashboard/note">
            <CreateNote passNote={addNote} />
            <DisplayNote noteArray={addItem} getAllNotes={getAllNotes} />
          </Route>
          <Route path="/dashboard/archive">
            <Archive />
          </Route>
        </>
      </main>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </div>
  );
}
export default withRouter(Dashboard);
