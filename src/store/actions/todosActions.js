import { ADD_TODO, DELETE_TODO, SET_TODOS, TOGLE_TODO } from './actionTypes';

import { getTodos } from '../../utils/utils';

export const setTodos = () => (dispatch) => {
  getTodos()
    .then(({ data }) => {
      dispatch({
        type: SET_TODOS,
        payload: data,
      });
    });
};

export const togleTodo = (id) => ({
  type: TOGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});
