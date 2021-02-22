import React, { Component } from "react";
import noteService from '../../../Services/NoteServices';
import { withRouter } from 'react-router-dom';
import './Archive.scss';
import Icons from '../BottonIcons'; 
import DisplayNote from '../../Note/DisplayNote/DisplayNote';

class Archive extends Component {
  state = {
    notes: [],
  };
  componentDidMount() {
    this.getAllNotes();
  }

  getAllNotes = () => {
    const token = localStorage.getItem("token");
    noteService.getNote(token).then((result) => {
      console.log(result.data.data);
      let allNotes = result.data.data.data.filter(
        (e) => e.isArchived === true && e.isDeleted === false
      );
      console.log(allNotes);
      this.setState({ notes: allNotes });
    });
  };

  render() {
    let items = this.state.notes
    return (
      // <div className="archive-note">
      //   { items.map((value, index) =>
      //   <div className="displayNote">
      //     <div className="main-div">
      //       <div className="title-div">
      //         {value.title}
      //       </div>
      //       <div className="content-div">
      //         {value.description}
      //       </div>
      //       <div className="icon-compo">
      //         <Icons />
      //       </div>
      //     </div>
      //   </div>
      //   )}
      // </div>

      <DisplayNote noteArray={this.state.notes} getAllNotes={this.getAllNotes} />
    );
  }
}
export default withRouter(Archive);