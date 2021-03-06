import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./CreateNote.scss";
import noteService from "../../../Services/NoteServices"; 
import Icons from "../../Dashboard/BottonIcons";

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
    setExpand(false);
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
            <div className="textarea-div">
                <textarea
              rows="1"
              name="description"
              value={note.description}
              onChange={InputEvent}
              column="200"
              onClick={expandIt}
              placeholder="Take a note..."
              className="no-outline"
            />
            </div>
              
              {expand ? (
                <div className="child3">
                <div className="icon-div">
                <Icons
                
                
                />
                </div>
                <div className="close-btn">
                <Button onClick={addEvent} className="font">
                   <b>close</b>
                </Button>
                </div>
               
              </div>
            ) : null}
              
            
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(Note);
