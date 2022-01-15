import { ADD_TODO, DELETE_TODO, SET_TODOS, TOGLE_TODO } from '../actions/actionTypes';

const initialState = {
  listOfTodos: [],
};

export const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TODOS:
      return {
        ...state,
        listOfTodos: payload,
      };

    case TOGLE_TODO:
      return {
        ...state,
        listOfTodos: state.listOfTodos.map(todo => {
          if (todo.id === payload) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }

          return todo;
        }),
      };

    case DELETE_TODO:
      return {
        ...state,
        listOfTodos: state.listOfTodos.filter(({ id }) => id !== payload),
      };

    case ADD_TODO:
      return {
        ...state,
        listOfTodos: [ payload, ...state.listOfTodos ],
      };

    default:
      return state;
  }
};
