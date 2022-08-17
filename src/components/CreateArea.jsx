import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [hasBeenClicked, setHasBeenClicked] = useState(false);
    const [noteInput, setNoteInput] = useState({ title: "", content: "" });

    function handleNoteInputChange(event) {
        const { name, value } = event.target;

        setNoteInput((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    return (
        <div>
            <form
                className="create-note"
                onSubmit={(event) => {
                    props.handleSubmit(noteInput);
                    setNoteInput({ title: "", content: "" });
                    setHasBeenClicked(false);
                    event.preventDefault();
                }}
            >
                {hasBeenClicked && (
                    <input
                        name="title"
                        placeholder="Title"
                        value={noteInput.title}
                        onChange={handleNoteInputChange}
                    />
                )}
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={hasBeenClicked ? 3 : 1}
                    value={noteInput.content}
                    onChange={handleNoteInputChange}
                    onClick={() => setHasBeenClicked(true)}
                />

                <Zoom in={hasBeenClicked}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
