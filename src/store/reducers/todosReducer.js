import {
  GET_ALL_TODOS,
  UPDATE_TODO_LIST,
  CREATE_NEW_TODO,
  FILTER_TODO_LIST,
  FILTER_SEARCH_INPUT,
  FILTER_COMPLETE_TODOS,
  DELETE_ALL_TODOS,
} from '../actions/todosActions';

const initialState = {
  allTodos: [],
  filteredTodoList: [],
  filters: {
    searchInputFilter: '',
    completedFilter: null,
  },
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
      const index = state.allTodos.findIndex((todo) => todo.id === payload.id);
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
    case FILTER_TODO_LIST: {
      // console.log(state.allTodos);
      // if (payload.value.split(' ').join('').length === 0) {
      //   return { ...state, filteredTodoList: state.allTodos };
      // }
      if (payload.action === 'search') {
        const newTodoList = state.allTodos.map((todo) => {
          if (
            todo.title
              .toLowerCase()
              .split(' ')
              .join('')
              .includes(payload.value.toLowerCase().split(' ').join(''))
          ) {
            return todo;
          }
        });
        const filteredList = newTodoList.filter((todo) => {
          return todo !== undefined;
        });
        return { ...state, filteredTodoList: filteredList };
      }
      if (payload.action === 'complete') {
        if (payload.value === 'all') {
          return { ...state, filteredTodoList: state.allTodos };
        }
        const newTodoList = state.allTodos.map((todo) => {
          if (payload.value === todo.completed) {
            return todo;
          }
        });
        const filteredList = newTodoList.filter((todo) => {
          return todo !== undefined;
        });
        return { ...state, filteredTodoList: filteredList };
      }
      return { ...state, filteredTodoList: state.allTodos };
    }
    case FILTER_SEARCH_INPUT: {
      return {
        ...state,
        filters: { ...state.filters, searchInputFilter: payload },
      };
    }
    case FILTER_COMPLETE_TODOS: {
      return {
        ...state,
        filters: { ...state.filters, completedFilter: payload },
      };
    }
    case DELETE_ALL_TODOS: {
      return { ...state, allTodos: [] };
    }
    default:
      return state;
  }
};
export default todosReducer;
