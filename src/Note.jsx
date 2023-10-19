
import React from 'react'

export default function Note({ id, text, deleteNote }){
    return (
        <div className="note">
          <div className="note__body">{text}</div>
          <div className="note__footer" style={{ justifyContent: "flex-end" }}>
            
            <button className="note__delete" onClick={() => deleteNote(id) } >Delete</button>
          </div>
          
        </div>
      );
}
