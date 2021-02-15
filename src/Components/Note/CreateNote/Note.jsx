import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./CreateNote.scss";
import noteService from "../../../Services/NoteServices"; 

const Note = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  //object distructuring
  const InputEvent = (event) => {
    // const value =   event.target.value;
    // const name =   event.target.name;

    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        //spread operator
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = (e) => {
    e.preventDefault();
    props.passNote(note);
    var data = {
      title: note.title,
      description: note.description,
    };
    setNote({
      title: "",
      description: "",
    });
    
    //let token = localStorage.getItem('token');
    //console.log(token);
    noteService.addNote(data).then((response) => {
      console.log(response);
      console.log(response.data);
    });
  };
  const expandIt = () => {
    setExpand(true);
  };

  return (
    <>
      <div className="main-createnote">
        <div className="dic">
          <form className="form-createNote">
            <div className="latter">
            {expand ? (
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={InputEvent}
                placeholder="Title"
                className="no-outline"
              />
            ) : null}
            </div>
            <div>
                <textarea
              rows="3"
              name="description"
              value={note.description}
              onChange={InputEvent}
              column="60"
              onClick={expandIt}
              placeholder="Take a note..."
              className="no-outline"
            />
            </div>
            
              <div>
              {expand ? (
              <Button onClick={addEvent}>
                Add
              </Button>
            ) : null}
              </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(Note);
