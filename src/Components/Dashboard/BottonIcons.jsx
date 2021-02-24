import React, { useState, useEffect } from "react";
import AddAlertIcon from '@material-ui/icons/AddAlert';
import { purple, orange, blue, lime, grey, brown, amber, yellow, lightGreen, green, cyan, lightBlue, indigo } from '@material-ui/core/colors';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import PaletteIcon from '@material-ui/icons/Palette';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from "react-router-dom";
import './icon.scss';
import ArchiveIcon from '@material-ui/icons/Archive';
import noteService from '../../Services/NoteServices';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: orange[300],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: purple[300],
    },
    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[300],
    },
    lime: {
        color: theme.palette.getContrastText(lime[500]),
        backgroundColor: lime[300],
    }, grey: {
        color: theme.palette.getContrastText(grey[500]),
        backgroundColor: grey[300],
    },
    brown: {
        color: theme.palette.getContrastText(brown[500]),
        backgroundColor: brown[300],
    },
    amber: {
        color: theme.palette.getContrastText(amber[500]),
        backgroundColor: amber[300],
    },
    yellow: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[300],
    },
    lightGreen: {
        color: theme.palette.getContrastText(lightGreen[500]),
        backgroundColor: lightGreen[300],
    },
    green: {
        color: theme.palette.getContrastText(green[500]),
        backgroundColor: green[300],
    }, cyan: {
        color: theme.palette.getContrastText(cyan[500]),
        backgroundColor: cyan[300],
    }, lightBlue: {
        color: theme.palette.getContrastText(lightBlue[500]),
        backgroundColor: lightBlue[300],
    }, indigo: {
        color: theme.palette.getContrastText(indigo[500]),
        backgroundColor: indigo[300],
    },
}));
    function BottonIcons(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMoreIconEl, setMoreIconEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickOnMoreIcon = (event) => {
        setMoreIconEl(event.currentTarget);
    };


    const deleteNote = (note) => {
        console.log(note.id);
        let data = {
            noteIdList: [note.id],
            isDeleted: true,
          }
          noteService.deleteNotes(data).then((response) => {
            console.log(response);
            console.log(response.data);
            props.getAllNotes();
          }).catch((error) => {
            console.log(error);
          });
          
    }
    const archiveNoteClick = (e) => {
        e.preventDefault();
        console.log(props.note);
         props.archiveNote(props.note);
    };
    const changeNoteColor = (e, color) => {
        e.preventDefault();
        props.changeNoteColor(color, props.note);
    };
    const handleCloseMoreIcon = () => {
        setMoreIconEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div className="icon-main">
        <div className="icon-super">
            <div className="child-icon">
                <AddAlertIcon />
            </div>
            <div className="child-icon">
                <PersonAddIcon />
            </div>
            <div className="child-icon" aria-haspopup="true" onClick={handleClick}>
                <PaletteIcon fontSize="small" />
            </div>
            <div className="child-icon">
                <InsertPhotoIcon />
            </div>
            <div className="child-icon" onClick={archiveNoteClick}>
                <ArchiveIcon/>
            </div>
            <div className="child-icon" aria-haspopup="true" onClick={handleClickOnMoreIcon}>
                <MoreVertIcon/>
            </div>
        </div>
        <div>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <div className="main-color">
                    <div>
                        <IconButton className="color color-orange" className={classes.orange} onClick={(e) => changeNoteColor(e, "#ff5722")} />
                        <IconButton className="color color-orange" className={classes.purple} onClick={(e) => changeNoteColor(e, "#9c27b0")} />
                        <IconButton className="color color-orange" className={classes.blue} onClick={(e) => changeNoteColor(e, "#2196f3")} />
                        <IconButton className="color color-orange" className={classes.lime} onClick={(e) => changeNoteColor(e, "#cddc39")} />
                    </div>
                    <div>
                        <IconButton className="color color-orange" className={classes.grey} onClick={(e) => changeNoteColor(e, "#9e9e9e")} />
                        <IconButton className="color color-orange" className={classes.brown} onClick={(e) => changeNoteColor(e, "#795548")} />
                        <IconButton className="color color-orange" className={classes.amber} onClick={(e) => changeNoteColor(e, "#ffc107")} />
                        <IconButton className="color color-orange" className={classes.yellow} onClick={(e) => changeNoteColor(e, "#ffeb3b")} />
                    </div>
                    <div>
                        <IconButton className="color color-orange" className={classes.lightGreen} onClick={(e) => changeNoteColor(e, "#8bc34a")} />
                        <IconButton className="color color-orange" className={classes.cyan} onClick={(e) => changeNoteColor(e, "#00bcd4")} />
                        <IconButton className="color color-orange" className={classes.lightBlue} onClick={(e) => changeNoteColor(e, "#03a9f4")} />
                        <IconButton className="color color-orange" className={classes.orange} onClick={(e) => changeNoteColor(e, "#ff5722")} />
                    </div>
                </div>
            </Menu>
            <Menu
                id="simple-menu"
                anchorEl={openMoreIconEl}
                keepMounted
                open={Boolean(openMoreIconEl)}
                onClose={handleCloseMoreIcon}
            >
            
                <MenuItem onClick={(e) => deleteNote(props.note)}>Delete Note</MenuItem> 
                <MenuItem onClick={handleClose}>add table</MenuItem>
            </Menu>
        </div>
    </div>
}
export default withRouter(BottonIcons);