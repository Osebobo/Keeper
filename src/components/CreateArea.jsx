import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const onSubmit = (event) => {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  };

  const [textArea, setTextArea] = useState(false);

  const isClicked = () => setTextArea(true);

  return (
    <div>
      <form className="create-note">
        {textArea && (
          <input
            onChange={onChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          onChange={onChange}
          onClick={isClicked}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={textArea ? "3" : "1"}
        />
        <Zoom in={textArea}>
          <Fab onClick={onSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
