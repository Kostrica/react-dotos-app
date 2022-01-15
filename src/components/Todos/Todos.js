import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togleTodo, deleteTodo } from "../../store/actions/todosActions";

import styles from "./Todos.module.scss";

export const Todos = () => {
  const dispatch = useDispatch();
  const { listOfTodos } = useSelector(({ todos }) => todos);

  const handleChange = (id) => {
    dispatch(togleTodo(id));
  };

  const handleClick = (id) => {
    dispatch(deleteTodo(id));
  };

  return(
  <form action="/">
    <ul className="collection">
      {listOfTodos.map(({ id, title, completed }) => (
        <li
          key={id}
          className="collection-item"
        >
          <div className={styles.todo}>
            <p>
              <label>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={() => handleChange(id)}
                />
                <span>{title}</span>
              </label>
            </p>
            <div className="secondary-content">
              <i
                className="material-icons"
                onClick={() => handleClick(id)}
              >
                delete
              </i>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </form>
  );
}
