import React from "react";
import { useContext } from "react";
import NoteContext from "../context/NoteContext";

function Home() {
  const user = useContext(NoteContext);

  return (
    <h3>
      {" "}
      Hello {user.data.name} {user.data.email}{" "}
    </h3>
  );
}

export default Home;
