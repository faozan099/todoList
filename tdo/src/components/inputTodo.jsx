// Test.jsx

import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTodo } from "../redux/action/actionsTodo";
import { RiPencilFill } from 'react-icons/ri';
import { TbTrashXFilled } from 'react-icons/tb';

const test = ({ todos, addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <>
      {/* ...kode lainnya... */}
      <form onSubmit={handleFormSubmit}>
        <input
          className="inputType"
          type="text"
          name="username"
          placeholder="What to do"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="buttonSubmit" type="submit">
          Add
        </button>
      </form>
      {/* ...kode lainnya... */}
      <div className="todoList my-3">
        {todos.map((todo, index) => (
          <Row className="wrapperTodoList" key={index}>
            <Col>
              <input type="checkbox" />
            </Col>
            <Col>{todo}</Col>
            <Col>
              <RiPencilFill />
            </Col>
            <Col>
              <TbTrashXFilled />
            </Col>
          </Row>
        ))}
      </div>
      {/* ...kode lainnya... */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = {
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(test);
