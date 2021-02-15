import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { withRouter } from 'react-router-dom';
import './DisplayNote.css';
import noteService from '../../../Services/NoteServices';
import CustomizedDialogs from '../../Note/CustomizedDialogs';

const DisplayNote = (props) => {
    const deleteNote = (e, id) => {
        e.preventDefault();
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
            <div className="display-main">

                {
                    props.noteArray.map((value, index) => {
                        return (
                            <form className="display-note">
                                <div></div>
                                <h1>{value.title}</h1>
                                <p>{value.description}</p>
                                <div>
                                    <button className="btn" onClick={(e) => deleteNote(e, value.id)}>
                                        Delete
                </button>
                                    <CustomizedDialogs />
                                </div>

                            </form>

                        )
                    })}
                {/* <updateNote 
                open = {handleClickOpen}
                close = {handleClose}
            /> */}

            </div>
        </>
    );
};

export default withRouter(DisplayNote);