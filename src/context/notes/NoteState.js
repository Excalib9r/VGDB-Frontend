import NoteContext from "./NoteState";
import { useState } from "react";
import axios from "axios";

const NoteState = (props) => {
  const host = "http://localhost:5001"
  const usersInitial = []
  const [users, setUSers] = useState(usersInitial)

  // Get all Notes
  const getUsers = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      }
    });
    const json = await response.json() 
    // setUSers(json)
  }

  // Add a Note
  const addUsers = async (email, password, username, dob) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      },
      body: JSON.stringify({email,password, username, dob})
    });

    // const user = await response.json();
  }

  // const addUsers = async (email, password, username, dob) => {
  // await axios.post(`${host}/api/notes/addnote`,{email : email, password : password, username: username, dob: dob})
  // .then((res) => {
  //   console.log(res)
  // })
  // .catch((err) => {
  //   console.log(err)
  // })
  // }

  // // Delete a Note
  // const deleteNote = async (id) => {
  //   // API Call
  //   const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
  //     }
  //   });
  //   const json = response.json(); 
  //   const newNotes = notes.filter((note) => { return note._id !== id })
  //   setNotes(newNotes)
  // }

  // // Edit a Note
  // const editNote = async (id, title, description, tag) => {
  //   // API Call 
  //   const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
  //     },
  //     body: JSON.stringify({title, description, tag})
  //   });
  //   const json = await response.json(); 

  //    let newNotes = JSON.parse(JSON.stringify(notes))
  //   // Logic to edit in client
  //   for (let index = 0; index < newNotes.length; index++) {
  //     const element = newNotes[index];
  //     if (element._id === id) {
  //       newNotes[index].title = title;
  //       newNotes[index].description = description;
  //       newNotes[index].tag = tag; 
  //       break; 
  //     }
  //   }  
  //   setNotes(newNotes);
  // }

  return (
    <NoteContext.Provider value={{ users, addUsers, getUsers }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;