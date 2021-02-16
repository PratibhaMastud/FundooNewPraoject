import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

export default function Popop(props) {
    const { openPopop, onClosePopop } = props;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setTitle(props.previousNoteArray.title);
        console.log(title);
    });
    useEffect(() => {
        setDescription(props.previousNoteArray.description);
        console.log(description);

    });

    return (
        <Dialog open={openPopop}>
            <DialogTitle>
                <div className="title-note">
                  value:{title}
                </div>
            </DialogTitle>
            <DialogContent>
                <div className="content-note">
                    {description}
                </div>
                <button onClick={onClosePopop}>close</button>
            </DialogContent>
        </Dialog>
    )
}