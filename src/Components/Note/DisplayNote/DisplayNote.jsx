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

    const [openPopop, setOpenPopop] = React.useState(false);
    const [updateCard, setUpdateCard] = React.useState({
        title: '',
        description:''
    });
    const onClosePopop = () => {
        setOpenPopop(false);
      };
      const openThePopop = (card) => {
          setUpdateCard(card);
          setOpenPopop(true);

      };
    return (
        <>
            <div className="display-main">
                {
                    props.noteArray.map((value, index) => {
                        return (
                            <div className="display-note" >
                                <div className="title-note" onClick={()=> openThePopop(value)}>
                                    {value.title}
                                </div>
                                <div className="content-note">
                                    {value.description}
                                </div>
                                                             
                                <div>
                                    <button className="btn" onClick={(e) => deleteNote(e, value.id)}>
                                        Delete
                                    </button>
                                    <IconClass />
                                </div>
                            </div>
                        )
                    })
                }
               <Popop
                openPopop = {openPopop}
                onClosePopop = {onClosePopop}
                updateCard = {updateCard}
                              
               />

            </div>
         
        </>
    );
};

export default withRouter(DisplayNote);