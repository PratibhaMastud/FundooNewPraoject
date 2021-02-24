import React from 'react';
import { withRouter } from 'react-router-dom';
import './DisplayNote.css';
import noteService from '../../../Services/NoteServices';
import IconClass from '../../Dashboard/BottonIcons';
import Popop from '../../files/Popop';
import MenuColor from '../../files/MenuColor';

const DisplayNote = (props) => {

    const [openPopop, setOpenPopop] = React.useState(false);
    const [updateCard, setUpdateCard] = React.useState({
        title: '',
        description: ''
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
    const archiveNote = (noteArch) => {
        console.log(noteArch.id);
        let archiveStatus = !noteArch.isArchived;
        let archiveObj = {
            isArchived: archiveStatus,
            noteIdList: [noteArch.id],
        };
        noteService.archiveNote(archiveObj).then((response) => {
            console.log(response);
            props.getAllNotes();
        }).catch((error) => {
            console.log(error);
        });
    };

    const onClosePopop = (updatedNote) => {
        setOpenPopop(false);
        let obj = {
            noteId: updatedNote.id,
            title: updatedNote.title,
            description: updatedNote.description,
        };

        noteService.updateNote(obj).then((response) => {
            console.log(response.data);
            props.getAllNotes();
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
                                <div className="title-note" onClick={() => openThePopop(value)}>
                                    {value.title}
                                </div>
                                <div className="content-note">
                                    {value.description}
                                </div>
                                
                                <div>
                                    <IconClass
                                        note={value}
                                        changeNoteColor={changeNoteColor}
                                        archiveNote={archiveNote}

                                    />
                                </div>
                            </div>
                        )
                    })
                }
                <Popop
                    openPopop={openPopop}
                    onClosePopop={onClosePopop}
                    updateCard={updateCard}
                />
                <MenuColor

                />
            </div>

        </>
    );
};

export default withRouter(DisplayNote);