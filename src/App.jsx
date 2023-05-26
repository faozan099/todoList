import { useState } from "react";
import { Form } from "./components/form";
import { Todos } from "./components/todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/actions/counterActions";
import { Container } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.operationsReducer);

  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState("");

  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <Container className="mt-5">
      <Container className="wrapper">
        <h2 className="text-center my-5">WHAT&apos;S THE PLAN FOR TODAY</h2>
        <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate} />
        <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
        {todos.length > 1 && (
          <button className="btn btn-danger btn-md delete-all mb-3" onClick={() => dispatch(deleteAll())}>
            DELETE ALL
          </button>
        )}
      </Container>
    </Container>
  );
}

export default App;
