import http from "./Http";


const addNote = (data) => {
  return http.post("/notes/addNotes", data, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
};
 const getNote = () => {
  return http.get("/notes/getNotesList", {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
 }

 const deleteNotes = (object) => {
  return http.post("/notes/trashNotes", object, {
      headers: {
          'Content-Type' : 'application/json',
          Authorization: localStorage.getItem('token'),
      },
  });
}
const updateNote = (updateObj) => {
  return http.post("/notes/updateNotes",updateObj, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
 }

 const colorNote = (colorObj) => {
  return http.post("/notes/changesColorNotes",colorObj, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
 }


export default {
    addNote,
    getNote,
    deleteNotes,
    updateNote,
    colorNote,
};