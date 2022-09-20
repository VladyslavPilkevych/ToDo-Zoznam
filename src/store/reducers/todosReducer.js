import {
  GET_ALL_TODOS,
  CREATE_NEW_TODO,
  DELETE_ALL_TODOS,
} from '../actions/todosActions';

const initialState = {
  allTodos: [],
};

const todosReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_ALL_TODOS: {
      return { ...state, allTodos: payload };
    }
    case CREATE_NEW_TODO: {
      if (state.allTodos.length === 0) {
        return { ...state, allTodos: [payload] };
      }
      return { ...state, allTodos: [...state.allTodos, payload]};
    }
    case DELETE_ALL_TODOS: {
      return { ...state, allTodos: [] };
    }
    default:
      return state;
  }
};
export default todosReducer;
