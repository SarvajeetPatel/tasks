import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const inputData = {
    name: "",
    email: "",
    pass: "",
    conPass: "",
  };
  const [data, setData] = useState(inputData);

  return (
    <NoteContext.Provider value={{ data, setData }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
