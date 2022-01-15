import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { CreateTodoForm } from "./components/CreateTodoForm/CreateTodoForm";
import { Header } from "./components/Header/Header";
import { Todos } from "./components/Todos/Todos";

import { setTodos } from "./store/actions/todosActions";

import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodos());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <Routes>
          <Route exact strict path="/create-todo-form" element={<CreateTodoForm />} />
          <Route exact strict path="/" element={<Todos />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
