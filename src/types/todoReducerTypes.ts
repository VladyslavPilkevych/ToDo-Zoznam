import { ITodo } from './types';

export interface ITodoInitialState {
  allTodos: ITodo[];
  filteredTodoList: ITodo[];
  filters: {
    searchInputFilter: string;
    completedFilter: boolean | null;
  };
}

export enum todosActionTypes {
  GET_ALL_TODOS = 'GET_ALL_TODOS',
  CHANGE_TODO_COMPLETED = 'CHANGE_TODO_COMPLETED',
  CREATE_NEW_TODO = 'CREATE_NEW_TODO',
  FILTER_TODO_LIST = 'FILTER_TODO_LIST',
  FILTER_SEARCH_INPUT = 'FILTER_SEARCH_INPUT',
  FILTER_COMPLETE_TODOS = 'FILTER_COMPLETE_TODOS',
  DELETE_TODO = 'DELETE_TODO',
}

interface IGetAllTodoList {
  type: todosActionTypes.GET_ALL_TODOS;
  payload: ITodo[];
}
interface IChangeTodoCompleted {
  type: todosActionTypes.CHANGE_TODO_COMPLETED;
  payload: number;
}
interface ICreateNewTodo {
  type: todosActionTypes.CREATE_NEW_TODO;
  payload: ITodo;
}
interface IFilterTodoList {
  type: todosActionTypes.FILTER_TODO_LIST;
  //   payload: {
  //     filterAction: string;
  //     value: string | boolean;
  //   };
//   payload: string | number | boolean;
  payload: {
    filterSearchInput: string;
    filterCompleted: boolean | null;
  };
}
interface IFilterSearchInput {
  type: todosActionTypes.FILTER_SEARCH_INPUT;
  payload: string;
}
interface IFilterCompleteTodos {
  type: todosActionTypes.FILTER_COMPLETE_TODOS;
  payload: boolean;
}
interface IDeleteTodo {
  type: todosActionTypes.DELETE_TODO;
  payload: number;
}
export type TodosAction =
  | IGetAllTodoList
  | IChangeTodoCompleted
  | ICreateNewTodo
  | IFilterTodoList
  | IFilterSearchInput
  | IFilterCompleteTodos
  | IDeleteTodo;
