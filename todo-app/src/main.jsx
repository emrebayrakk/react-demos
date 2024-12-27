import { createRoot } from "react-dom/client";
import TodoApp from "./components/TodoApp";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
