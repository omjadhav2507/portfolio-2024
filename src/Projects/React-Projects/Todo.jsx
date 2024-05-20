import React, { useState, useReducer } from "react";

function reducer(prevTodos, action) {
  switch (action.type) {
    case "Add":
      return [...prevTodos, { text: action.payload, checked: false }];
    case "Rem":
      return prevTodos.filter((_, index) => index !== action.payload);
    case "Toggle":
      return prevTodos.map((todo, index) =>
        index === action.payload ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return prevTodos;
  }
}

function Todo() {
  const [todo, setTodo] = useState("");
  const initialTodos = [
    { text: "web design", checked: false },
    { text: "app design", checked: false },
  ];
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleAdd = () => {
    if (todo.trim() !== "") {
      dispatch({ type: "Add", payload: todo });
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    dispatch({ type: "Rem", payload: index });
  };

  const toggleTodo = (index) => {
    dispatch({ type: "Toggle", payload: index });
  };

  return (
    <>
      <div style={{ width: "70%" }}>
        <h3 className="mb-4">Todo</h3>
        <div className="d-flex justify-content-center">
          <div style={{ width: "61%" }}>
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="Enter New Task"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <button
                className="input-group-text btn-dark"
                id="basic-addon2"
                onClick={handleAdd}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div style={{ width: "61%" }}>
            <ul className="list-group">
              {todos.map((t, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center mt-2"
                  key={index}
                >
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      checked={t.checked}
                      onChange={() => toggleTodo(index)}
                    />
                    <span
                      style={{
                        textDecoration: t.checked ? "line-through" : "none",
                      }}
                    >
                      {t.text}
                    </span>
                  </div>
                  <button className="btn" onClick={() => deleteTodo(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-x-lg"
                      viewBox="0 0 16 16"
                      style={{ color: "red" }}
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
