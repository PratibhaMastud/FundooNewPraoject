import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Note from '../Note/CreateNote/Note';
import DisplayNote from '../Note/DisplayNote/DisplayNote';

function CreateNote(props) {

    return (
        <>
        <Note/>
        {/* <DisplayNote getAllNotes={props.getAllNotes}/> */}
        </>
    );
  }
  
  export default withRouter(CreateNote);