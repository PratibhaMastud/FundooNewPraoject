import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { withRouter } from 'react-router-dom';
import './DisplayNote.css';
import noteService from '../../../Services/NoteServices';
import CustomizedDialogs from '../../Note/CustomizedDialogs';
import IconClass from '../../Dashboard/BottonIcons';
const DisplayNote = (props) => {
    const deleteNote = (e, id) => {
        e.preventDefault();
        console.log(id);
        props.deletedItem(id);
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <div className="main-display">
            <div className="display-main">

                {
                    props.noteArray.map((value, index) => {
                        return (
                            <form className="display-note">
                                <div className="title-note">
                                    {value.title}
                                </div>
                                <div className="content-note">
                                    {value.description}
                                </div>
                                
                               
                                
                                <div>
                                    {/* <button className="btn" onClick={(e) => deleteNote(e, value.id)}>
                                        Delete
                                    </button> */}
                                    <IconClass />
                                </div>
                            </form>
                        )
                    })
                }
                {/* <updateNote 
                open = {handleClickOpen}
                close = {handleClose}
            /> */}

            </div>
            </div>
        </>
    );
};

export default withRouter(DisplayNote);