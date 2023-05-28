import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";
import { dkeeper5 } from "../../../declarations/dkeeper5/";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(inputNotes) {
    setNotes((prevItems) => {
      dkeeper5.createNote(inputNotes.title, inputNotes.content)
      return [inputNotes, ...prevItems];
    });
  };


  useEffect(() => {
    console.log('UseEffect');
    fetchData()
  }, [])


  async function fetchData() {
    const notesArray = await dkeeper5.readNotes()
    setNotes(notesArray)
  }

  function deleteNote(id) {
    dkeeper5.deleteNote(id)
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          onDel={deleteNote}
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
