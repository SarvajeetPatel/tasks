import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NoteState from "./context/NoteState";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <NoteState>
        <App />
      </NoteState>
    </BrowserRouter>
  </>,
);
