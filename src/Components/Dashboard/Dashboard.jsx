import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EditIcon from "@material-ui/icons/Edit";
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import DeleteIcon from "@material-ui/icons/Delete";
import ArchiveIcon from "@material-ui/icons/Archive";
import NoteIcon from "@material-ui/icons/Note";
import CreateNote from "../Note/CreateNote/Note";
import Note from "../Note/DisplayNote/DisplayNote";
import noteService from "../../Services/NoteServices";
import updateNote from "../Note/CustomizedDialogs";
import "./Dashboard.scss";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "#202124cc",
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
    color: "#20212487",
  },
  list: {
    marginTop: theme.spacing(8),
  },
  searchCol: {
    color: "#202124cc",
  },
}));

function Dashboard() {
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
      setAddItem(response.data.data.data);
    }).catch((error) => {
      console.log(error);
    });

  }

  useEffect(() => {
    console.log("Use Effect run");
    getAllNotes();
  }
    , [])

  // const onDelete = (id) => {
  //   console.log(id);
    
  //   let object = {
  //     isDeleted: true,
  //      noteIdList:[id]
  //   };

  //   noteService.deleteNotes(object).then((response) => {
  //       console.log("delete Item");
  //   }).catch((error) => {
  //       console.log(error);
  //   });
   
  // };

  const deleteRecord = (id) => {
    console.log(id);
    var deleteObj = {
      isDeleted: true,
      noteIdList: [id]
    };
    noteService.deleteNotes(deleteObj).then((response) => {
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

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.clear(); 
  //     };
  const menuId = "primary-search-account-menu";
  const renderMenu = (

    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
    //className={classes.profile}
    >

      <div>
        <button> Logout</button>
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
          <ListItem button>
            <NoteIcon className={classes.col} />
            <ListItemText primary="Notes" className={classes.notesIcon} />
          </ListItem>
          <ListItem button>
            <NotificationsActiveIcon className={classes.col} />
            <ListItemText
              primary="Notifications"
              className={classes.notesIcon}
            />
          </ListItem>
          <ListItem button>
            <EditIcon className={classes.col} />
            <ListItemText primary="Edit" className={classes.notesIcon} />
          </ListItem>
          <ListItem button>
            <ArchiveIcon className={classes.col} />
            <ListItemText primary="Archive" className={classes.notesIcon} />
          </ListItem>
          <ListItem button>
            <DeleteIcon className={classes.col} />
            <ListItemText primary="Bin" className={classes.notesIcon} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <>
          <CreateNote passNote={addNote} />
          <Note
            noteArray={addItem}
            deletedItem={deleteRecord}
          />


        </>
      </main>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </div>
  );
}
export default withRouter(Dashboard);
