import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

export default function Popop(props) {
    const { openPopop, onClosePopop } = props;

    const [note, setNote] = useState({
        title:'',
        description:''
    });
    const [description, setDescription] = useState('');
    
    useEffect(() => {
        setNote(props.updateCard);
        console.log(props.updateCard);
    },[props.updateCard]);
    

    return (
        <Dialog open={openPopop}>
            <DialogTitle>
                <div className="title-note">
                 {note.title}
                </div>
            </DialogTitle>
            <DialogContent>
                <div className="content-note">
                    {note.description}
                </div>
                <button onClick={onClosePopop}>close</button>
            </DialogContent>
            
        </Dialog>
    )
}