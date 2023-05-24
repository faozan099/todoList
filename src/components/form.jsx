/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../redux/todoapp/actions/counterActions";
import {Container} from "react-bootstrap"


export const Form = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");

  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };

  return (
    <Container>
      {editFormVisibility === false ? (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <Container className="input-and-btn">
            <input type="text" className="form-control" required value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
            <button type="submit" className="btn btn-secondary btn-md">
              ADD
            </button>
          </Container>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={editSubmit}>
          <Container className="input-and-btn">
            <input type="text" className="form-control" placeholder="hallo" required value={editValue || ""} onChange={(e) => setEditValue(e.target.value)} />
            <button type="submit" className="btn btn-secondary btn-md">
              UPDATE
            </button>
          </Container>
          <button type="button" className="btn btn-primary btn-md back-btn" onClick={cancelUpdate}>
            BACK
          </button>
        </form>
      )}
    </Container>
  );
};
