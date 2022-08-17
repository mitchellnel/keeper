import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

import { v4 as uuidv4 } from "uuid";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(noteInput) {
        setNotes((prevValue) => {
            return [
                ...notes,
                {
                    id: uuidv4(),
                    title: noteInput.title,
                    content: noteInput.content,
                },
            ];
        });
    }

    function deleteNote(noteId) {
        setNotes((prevValue) => {
            return prevValue.filter((note) => {
                return note.id !== noteId;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea handleSubmit={addNote} />
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    content={note.content}
                    onClick={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
