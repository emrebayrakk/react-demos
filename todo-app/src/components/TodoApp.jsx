import Form from "./Form";
import Header from "./Header";
import Summary from "./Summary";
import TodoList from "./TodoList";

export default function TodoApp() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Header />
          <Form />
          <TodoList />
          <Summary />
        </div>
      </div>
    </div>
  );
}
