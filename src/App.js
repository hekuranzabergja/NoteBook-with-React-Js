import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "row", width: "100%",justifyContent:"space-between",marginTop: "70px" }}
    >
      
      <NotesList notes={notes} />
      <AddNewNote setNotes={setNotes} />
    </div>
  );
};

export default App;
