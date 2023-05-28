import React, { useState } from "react";
import Button from "./Button";

function InputNote(props) {
  const [inputNotes, setInputNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="noteInput">
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="title"
          value={inputNotes.title}>
        </input>
        <input
          onChange={handleChange}
          type="text"
          name="content"
          value={inputNotes.content}>
        </input>
        <Button
          onClick={() => {
            props.onAdd(inputNotes)
          }}
          button="Add"
        />
      </div>
    </div>
  );
}

export default InputNote;
