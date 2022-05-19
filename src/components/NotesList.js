import { useState } from "react";

const NotesList = ({ notes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="notesList">
      <h3 style={{ marginLeft: "15px" }}>Search Notes</h3>
      <input
        className="input"
        placeholder="Search by tags"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginLeft: "15px" }}
      />
      <h3 style={{ marginLeft: "15px" }}> Notes</h3>
      <ul>
        {/* Checking if there are any notes in the array. If there are, it will filter the notes by the
        search term and map through the notes and return the note title, description, and date. If
        there are no notes, it will return null. */}
        {notes.length
          ? notes
              .filter((note) =>
                note.tags.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((note, index) => {
                return (
                  <div className="notes-list">
                    <li key={index} style={{ marginLeft: "15px" }}>
                      <p>
                        <span> Titulli:</span> <br /> {note.title}
                      </p>
                      <p>
                        <span>Tags:</span> <br /> {note.tags}
                      </p>
                      <p>
                        <span>Descripiton:</span> <br /> {note.description}
                      </p>

                      <p>
                        <span>Date:</span> {note.date}
                      </p>
                    </li>
                  </div>
                );
              })
          : null}
      </ul>
    </div>
  );
};

export default NotesList;
