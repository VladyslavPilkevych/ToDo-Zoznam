import { GET_ALL_TODOS, DELETE_ALL_TODOS } from '../actions/todosActions';

const initialState = {
  allTodos: [],
};

const todosReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_ALL_TODOS: {
      return { ...state, allTodos: payload };
    }
    case DELETE_ALL_TODOS: {
      return { ...state, allTodos: [] };
    }
    default:
      return state;
  }
};
export default todosReducer;
