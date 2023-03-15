import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 99999),
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option onChange={statusHandler} value="all">
            All
          </option>
          <option onChange={statusHandler} value="completed">
            Completed
          </option>
          <option onChange={statusHandler} value="uncompleted">
            Uncompleted
          </option>
        </select>
      </div>
    </form>
  );
};

export default Form;
