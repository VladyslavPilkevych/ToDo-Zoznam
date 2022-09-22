import {
  GET_ALL_TODOS,
  UPDATE_TODO_LIST,
  CREATE_NEW_TODO,
  FILTER_TODO_LIST,
  FILTER_SEARCH_INPUT,
  FILTER_COMPLETE_TODOS,
  DELETE_ALL_TODOS,
} from '../actions/todosActions';
import { ITodo, IData, IUpdateData } from '../../types/types';

export const getAllTodos = (data: ITodo[]) => ({
  type: GET_ALL_TODOS,
  payload: data,
});
export const updateTodoList = (data: IUpdateData) => ({
  type: UPDATE_TODO_LIST,
  payload: data,
});
export const createNewTodo = (data: ITodo) => ({
  type: CREATE_NEW_TODO,
  payload: data,
});
export const filterTodoList = (data: IData) => ({
  type: FILTER_TODO_LIST,
  payload: data,
});
export const liveSearchInputFilter = (data: string) => ({
  type: FILTER_SEARCH_INPUT,
  payload: data,
});
export const changeFilterCompleteTodos = (data: string | number) => ({
  type: FILTER_COMPLETE_TODOS,
  payload: data,
});
export const deleteAllTodos = () => ({ type: DELETE_ALL_TODOS });
