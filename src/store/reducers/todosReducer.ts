import { ITodo } from '../../types/types';
import { TodosAction, ITodoInitialState, todosActionTypes } from '../../types/todoReducerTypes';

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
    case todosActionTypes.GET_ALL_TODOS: {
      return { ...state, allTodos: action.payload };
    }
    case todosActionTypes.CHANGE_TODO_COMPLETED: {
      const newTodoList = state.allTodos.filter((todo: ITodo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { ...state, allTodos: newTodoList };
    }
    case todosActionTypes.CREATE_NEW_TODO: {
      if (state.allTodos.length === 0) {
        return { ...state, allTodos: [action.payload] };
      }
      return { ...state, allTodos: [...state.allTodos, action.payload] };
    }
    case todosActionTypes.FILTER_TODO_LIST: {
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
    case todosActionTypes.FILTER_SEARCH_INPUT: {
      return {
        ...state,
        filters: { ...state.filters, searchInputFilter: action.payload },
      };
    }
    case todosActionTypes.FILTER_COMPLETE_TODOS: {
      return {
        ...state,
        filters: { ...state.filters, completedFilter: action.payload },
      };
    }
    case todosActionTypes.DELETE_TODO: {
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
