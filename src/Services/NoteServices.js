import http from "./Http";


// const addNote = (data, token) => {
//   return http.post("/notes/addNotes/", data, {
//     headers: {
//       Authorization: `${token}`,
//     },
//   });
// };

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


export default {
    addNote,
    getNote,
    deleteNotes,
};