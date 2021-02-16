import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

export default function Popop(props){
    const {title, description ,openPopop , setOpen} = props;
    return(

       <Dialog open={openPopop}>
           <DialogTitle>
                <div>hi heloo</div>
           </DialogTitle>
           <DialogContent>
                <div>vhooo</div>
           </DialogContent>
       </Dialog>
    )
}