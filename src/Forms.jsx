import { useState } from "react";
import './index.css'
import CreateNotes from "./CreateNotes";
import Note from "./Note";

let counter = 0;

function Forms() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [editNotes, setEdit] = useState(null);
  const [isStart, setStart] = useState(true);

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    if (inputText) {
      if (editNotes !== null) {
       
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.id === editNotes ? { ...note, text: inputText } : note
          )
        );
        setEdit(null);
        setStart(true); 
        setInputText('');
      } else {
       
        setNotes((prevNotes) => [
          ...prevNotes,
          {
            id: `id_${counter++}`,
            text: inputText,
          },
        ]);

        setInputText('');
      }
    }
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const editNote = (id, text) => {
    setStart(false); 
    setEdit(id);
    setInputText(text);
  };

  return (
    <div className="notes">
      {notes.map((note) =>
        editNotes === note.id ? (
          <CreateNotes
            key={note.id}
            textHandler={textHandler}
            saveHandler={saveHandler}
            inputText={inputText}
          />
        ) : (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        )
      )}
      {isStart ? (
        <CreateNotes
          textHandler={textHandler}
          saveHandler={saveHandler}
          inputText={inputText}
        />
      ) : null}
    </div>
  );
}

export default Forms;
