import { useState  } from "react";
import './index.css'
import CreateNotes from "./CreateNotes";
import Note from "./Note";

let counter = 0;


function Forms() {

  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: `id_${counter++}` ,
        text: inputText
      }
    ]);
  
    setInputText("");
  };


  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

 
  
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
      <CreateNotes
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
  );
}

export default Forms;

