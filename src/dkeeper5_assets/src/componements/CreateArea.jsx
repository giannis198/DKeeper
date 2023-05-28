import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import { Collapse, Fab } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [checked, setChecked] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div
      onMouseOver={() => setChecked(true)}
      onMouseOut={() => setChecked(false)}>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <Collapse in={checked}>
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows="3"
          />
        </Collapse>

        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "500ms" : "0ms" }}>
          <Fab>
            <AddIcon onClick={submitNote} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
