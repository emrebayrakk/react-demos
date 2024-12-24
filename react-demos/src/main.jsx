import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Events from "./components/Events.jsx";
import State from "./components/State.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Events /> */}
    <State />
  </StrictMode>
);
