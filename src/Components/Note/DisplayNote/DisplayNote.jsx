import React from 'react';
import Card from "@material-ui/core/Card";
import { withRouter } from 'react-router-dom';
import './DisplayNote.css';
import noteService from '../../../Services/NoteServices';
import IconClass from '../../Dashboard/BottonIcons';
import Popop from '../../files/Popop';
import MenuColor from '../../files/MenuColor';
const DisplayNote = (props) => {


    // const deleteNote = (id) => {
    //     console.log(id);
    //     let data = {
    //         noteIdList: [id],
    //         isDeleted: true,
    //       }
    //       noteService.deleteNotes(data).then((response) => {
    //         console.log(response);
    //         console.log(response.data);
    //       }).catch((error) => {
    //         console.log(error);
    //       });
          
    // }

    const [openPopop, setOpenPopop] = React.useState(false);
    const [updateCard, setUpdateCard] = React.useState({
        title: '',
        description:''
    });
        
    const [openPalette, setOpenPalette] = React.useState(false);

    const colorPalette = () => {
        setOpenPalette(!openPalette);
    };

    const changeNoteColor = (color, note) => {
        console.log("color note:", note.id);

        let colorObj = {
          color: color,
          noteIdList: [note.id],
        };
        noteService.colorNote(colorObj).then((response) => {
            console.log(response);
            props.getAllNotes();
          })
          .catch((error) => {
            console.log(error);
          });
    };

    const onClosePopop = (updatedNote) => {
        setOpenPopop(false);
            let obj = {
                noteId: updatedNote.id,
                title : updatedNote.title,
                description: updatedNote.description,
            };
        
           noteService.updateNote(obj).then((response) => {
            console.log(response.data);
           }).catch((error) => {
            console.log(error);
           })
      };

      const openThePopop = (card) => {
          setUpdateCard(card);
          setOpenPopop(!openPopop);
      };

    return (
        <>
            <div className="display-main">
                {
                    props.noteArray.map((value, index) => {
                        return (
                            <div className="display-note" style={{ backgroundColor: value.color }}>
                                <div className="title-note" onClick={()=> openThePopop(value)}>
                                    {value.title}
                                </div>
                                <div className="content-note">
                                    {value.description}
                                </div>
                                    {/* <button className="btn" onClick={(e) => deleteNote(value.id)}>
                                        Delete
                                    </button> */}
                                    <div >
                                    <IconClass
                                    note={value}
                                    changeNoteColor = {changeNoteColor}
                                    
                                    />
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
                <MenuColor 
                
                />
            </div>
         
        </>
    );
};

export default withRouter(DisplayNote);