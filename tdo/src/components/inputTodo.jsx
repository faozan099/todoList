import { Container, Col, Row } from "react-bootstrap";
import "../components/inputTodo.css";
import { RiPencilFill } from "react-icons/ri";
import { TbTrashXFilled } from "react-icons/tb";

const TodoList = () => {
  return (
    <>
      <Container className="container-lg">
        <Container className="wrapper container-lg">
          <p>What&apos;s plan for today</p>
          <Container className="container-lg">
            {/* INI UI BAGIAN INPUT TODO!! */}

            <form>
              <input className="inputType" type="text" name="username" placeholder="What to do" />
              <button className="buttonSubmit">Add</button>
            </form>

            {/* INI UI TOMBOL FILLTER!! */}

            <div>
              <button className="button">All</button>
              <button className="mx-3 button">Active</button>
              <button className="button">Completed</button>
            </div>

            {/* INI UI BAGIAN DISPLAY TODO LIST!! */}

            <div className="todoList my-3">
              <Row className="wrapperTodoList">
                <Col>
                  <input type="checkbox" />
                </Col>
                <Col>MAU MAKAN</Col>
                <Col>
                  <RiPencilFill />
                </Col>
                <Col>
                  <TbTrashXFilled />
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default TodoList;
