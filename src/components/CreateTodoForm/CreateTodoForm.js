import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from "../../store/actions/todosActions";

import styles from "./CreateTodoForm.module.scss";

export const CreateTodoForm = () => {
  const dispatch = useDispatch();
  const [ title, setTitle ] = useState('');

  const handleChange = ({ value }) => {
    setTitle(value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      userId: 7,
      id: uuidv4(),
      title,
      completed: false,
    };

    if (title) {
      dispatch(addTodo(newTodo));
      setTitle('');
    }
  };

  return(
    <div className={styles.container}>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field s6">
            <input
              id="todo_title"
              type="text"
              className="validate"
              value={title}
              onChange={({ target }) => handleChange(target)}
            />
            <label htmlFor="todo_title">Todo title</label>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add todo
            <i className="material-icons right">forward</i>
          </button>
        </div>
      </form>
    </div>
  );
}
