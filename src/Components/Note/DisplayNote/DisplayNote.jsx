import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { withRouter } from 'react-router-dom';
import './DisplayNote.css';
import noteService from '../../../Services/NoteServices';
import IconClass from '../../Dashboard/BottonIcons';
import Popop from '../../files/Popop';

const DisplayNote = (props) => {
    const deleteNote = (e, id) => {
        e.preventDefault();
        console.log(id);
        props.deletedItem(id);
    }

    const [open, setOpen] = React.useState(false);
    const [openPopop, setOpenPopop] = React.useState(false);
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
                            <div className="display-note">
                                <div className="title-note" onClick = { () => setOpenPopop(true)}>
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
                            </div>
                        )
                    })
                }
               <Popop
                openPopop = {openPopop}
                setOpenPopop = {setOpenPopop}
               />

            </div>
         
        </>
    );
};

export default withRouter(DisplayNote);