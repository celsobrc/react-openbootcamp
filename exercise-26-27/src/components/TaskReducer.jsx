import React, { useReducer } from "react";

// ACTIONS
const CREATE = "CREATE";
const DELETE = "DELETE";
const FILTER = "FILTER";

// INITIAL STATE
const initialState = [];

// REDUCER
const todoReducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case FILTER:
      return state.filter((todo) => todo.status === "completed");
    default:
      return state;
  }
};

const TaskReducer = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodoPeding = () => {
    const newTodo = {
      id: state.length + 1,
      todo: `New todo ${state.length + 1}`,
      status: "pending",
    };
    dispatch({ type: CREATE, payload: newTodo });
  };

  const addTodoCompleted = () => {
    const newTodo = {
      id: state.length + 1,
      todo: `New todo ${state.length + 1}`,
      status: "completed",
    };

    dispatch({ type: CREATE, payload: newTodo });
  };

  const filterAllCompleted = () => {
    dispatch({ type: FILTER });
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE, payload: id });
  };

  return (
    <div>
      <h2>Version UseReducer</h2>
      <button onClick={addTodoPeding}>Add Todo Peding</button>
      <br />
      <button onClick={addTodoCompleted}>Add Todo Completed</button>
      <br />
      <button onClick={filterAllCompleted}>Filter Todo Completed</button>
      <br />
      {state.map((todo) => {
        return (
          <>
            <h3>{todo.todo}</h3>
            <h4>Status: {todo.status}</h4>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
};

export default TaskReducer;
