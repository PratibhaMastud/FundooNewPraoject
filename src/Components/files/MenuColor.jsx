import React from 'react';
import Menu from '@material-ui/core/Menu';
import {purple,orange,blue ,lime,grey,brown,amber,yellow,lightGreen,green,cyan,lightBlue,indigo} from '@material-ui/core/colors';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Tooltip } from "@material-ui/core";

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
    },grey: {
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
    },cyan: {
        color: theme.palette.getContrastText(cyan[500]),
        backgroundColor: cyan[300],
    },lightBlue: {
        color: theme.palette.getContrastText(lightBlue[500]),
        backgroundColor: lightBlue[300],
    },indigo: {
        color: theme.palette.getContrastText(indigo[500]),
        backgroundColor: indigo[300],
    },
}));

export default function SimpleMenu(props) {
    const classes = useStyles();
    return (
        <div>
            
            <Menu
                id="simple-menu"
                anchorEl={props.anchorEl}
                keepMounted
                open={props.anchorEl}
            >
                <div className="main-color">
                    <div>
                    <IconButton className="color color-orange" className={classes.orange} />
                    <IconButton className="color color-orange" className={classes.purple} />
                    <IconButton className="color color-orange" className={classes.blue} />
                    <IconButton className="color color-orange" className={classes.lime} />
                    </div>
                    <div>
                    <IconButton className="color color-orange" className={classes.grey} />
                    <IconButton className="color color-orange" className={classes.brown} />
                    <IconButton className="color color-orange" className={classes.amber} />
                    <IconButton className="color color-orange" className={classes.yellow} />
                    </div>
                    <div>
                    <IconButton className="color color-orange" className={classes.lightGreen} />
                    <IconButton className="color color-orange" className={classes.cyan} />
                    <IconButton className="color color-orange" className={classes.lightBlue} />
                    <IconButton className="color color-orange" className={classes.orange} />
                    </div>
                </div>

            </Menu>
        </div>
        
    );
}