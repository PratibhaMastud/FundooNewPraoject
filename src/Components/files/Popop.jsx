import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import './Popop.scss';
import Icons from '../Dashboard/BottonIcons';
import Button from "@material-ui/core/Button";


export default function Popop(props) {
    const { openPopop ,onClosePopop} = props;

    const [note, setNote] = useState({
        title: '',
        description: ''
    });
    const [description, setDescription] = useState('');

    useEffect(() => {
        setNote(props.updateCard);
        console.log(props.updateCard);
    }, [props.updateCard]);

    
    return (
        <Dialog open={openPopop} minWidth="md">
            <div className="main-popop">
                <div className="title-popop">
                    <div className="child1">
                             <input
                                type="text"
                                name="title"
                                value={note.title}
                                placeholder="Title"
                                onChange={(e) => setNote({ ...note,title: e.target.value })}
                                className="no-outline"
                            /> 
                    </div>
                    <div className="child2">
                            <textarea
                                rows="10"
                                name="description"
                                value={note.description}
                                column="300"
                                className="no-outline"
                                onChange={(e) => setNote({...note, description: e.target.value})}
                            />
                    </div>

                </div>

                <div className="child-popop">
                    <div className="icon-popop">
                        <Icons />
                    </div>
                    <div className="close-popop">
                        <Button onClick={() => onClosePopop(note)}>close</Button>
                    </div>

                </div>

            </div>
        </Dialog>

    )
}