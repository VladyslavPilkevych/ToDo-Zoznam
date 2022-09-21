import {
  GET_ALL_TODOS,
  UPDATE_TODO_LIST,
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
    case UPDATE_TODO_LIST: {
      if (payload.action === 'completed') {
        const newTodoList = state.allTodos.map((todo) => {
          if (todo.id === payload.id) {
            todo.completed = !todo.completed;
            return todo;
          }
          return todo;
        });
        return { ...state, allTodos: newTodoList };
      }
      const index = state.allTodos.findIndex((item) => item.id === payload.id);
      const newTodoList = [...state.allTodos];
      newTodoList.splice(index, 1);
      return { ...state, allTodos: newTodoList };
    }
    case CREATE_NEW_TODO: {
      if (state.allTodos.length === 0) {
        return { ...state, allTodos: [payload] };
      }
      return { ...state, allTodos: [...state.allTodos, payload] };
    }
    case DELETE_ALL_TODOS: {
      return { ...state, allTodos: [] };
    }
    default:
      return state;
  }
};
export default todosReducer;
