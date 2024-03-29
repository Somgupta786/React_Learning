import './index.css'
function CreateNotes({ textHandler, saveHandler, inputText }) {
  
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Write here .."
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="note__footer">
        
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
      
    </div>
  );
}

export default CreateNotes;
