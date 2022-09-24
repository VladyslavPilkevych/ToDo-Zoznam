import {
  GET_ALL_TODOS,
  CHANGE_TODO_COMPLETED,
  CREATE_NEW_TODO,
  FILTER_TODO_LIST,
  FILTER_SEARCH_INPUT,
  FILTER_COMPLETE_TODOS,
  DELETE_TODO,
} from '../actions/todosActions';
import { ITodo } from '../../types/types';
import { TodosAction, ITodoInitialState } from '../../types/todoReducerTypes';

const initialState: ITodoInitialState = {
  allTodos: [],
  filteredTodoList: [],
  filters: {
    searchInputFilter: '',
    completedFilter: null,
  },
};

const todosReducer = (
  state = initialState,
  action: TodosAction
): ITodoInitialState => {
  switch (action.type) {
    case GET_ALL_TODOS: {
      return { ...state, allTodos: action.payload };
    }
    case CHANGE_TODO_COMPLETED: {
      const newTodoList = state.allTodos.filter((todo: ITodo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { ...state, allTodos: newTodoList };
    }
    case CREATE_NEW_TODO: {
      if (state.allTodos.length === 0) {
        return { ...state, allTodos: [action.payload] };
      }
      return { ...state, allTodos: [...state.allTodos, action.payload] };
    }
    case FILTER_TODO_LIST: {
      let sortedTodoList: ITodo[] = state.allTodos;
      if (action.payload.filterSearchInput.length > 0) {
        const newTodosArr = sortedTodoList.filter((todo) => {
          if (
            todo.title
              .toLowerCase()
              .split(' ')
              .join('')
              .includes(
                action.payload.filterSearchInput
                  .toLowerCase()
                  .split(' ')
                  .join('')
              )
          ) {
            return todo;
          }
        });
        sortedTodoList = newTodosArr;
      }
      console.log(action.payload.filterCompleted);
      if (typeof action.payload.filterCompleted === 'boolean') {
        const newTodosArr = sortedTodoList.filter((todo) => {
          if (action.payload.filterCompleted === todo.completed) {
            return todo;
          }
        });
        sortedTodoList = newTodosArr;
      }
      return { ...state, filteredTodoList: sortedTodoList };
    }
    case FILTER_SEARCH_INPUT: {
      return {
        ...state,
        filters: { ...state.filters, searchInputFilter: action.payload },
      };
    }
    case FILTER_COMPLETE_TODOS: {
      return {
        ...state,
        filters: { ...state.filters, completedFilter: action.payload },
      };
    }
    case DELETE_TODO: {
      const index = state.allTodos.findIndex(
        (todo) => todo.id === action.payload
      );
      const newTodoList = [...state.allTodos];
      newTodoList.splice(index, 1);
      return { ...state, allTodos: newTodoList };
    }
    default:
      return state;
  }
};
export default todosReducer;
