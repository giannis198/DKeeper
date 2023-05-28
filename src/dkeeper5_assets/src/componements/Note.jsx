import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";



function Note(props) {
  return (
    <div className="note">
      <div className="form">
        <h1 name="title">{props.title}</h1>
        <p name="content">{props.content}</p>
        {/* <button
          onClick={() => {
            props.onUpdate(props.id);
          }}>
          Update
        </button> */}
        <Fab>
          <DeleteIcon
            onClick={() => {
              props.onDel(props.id);
            }}
          />
        </Fab>
      </div>
    </div>
  );
}

export default Note;
