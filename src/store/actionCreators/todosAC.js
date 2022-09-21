import {
  GET_ALL_TODOS,
  UPDATE_TODO_LIST,
  CREATE_NEW_TODO,
  FILTER_TODO_LIST,
  FILTER_SEARCH_INPUT,
  DELETE_ALL_TODOS,
} from '../actions/todosActions';

export const getAllTodos = (data) => ({
  type: GET_ALL_TODOS,
  payload: data,
});
export const updateTodoList = (data) => ({
  type: UPDATE_TODO_LIST,
  payload: data,
});
export const createNewTodo = (data) => ({
  type: CREATE_NEW_TODO,
  payload: data,
});
export const filterTodoList = (data) => ({
  type: FILTER_TODO_LIST,
  payload: data,
});
export const liveSearchInputFilter = (data) => ({
  type: FILTER_SEARCH_INPUT,
  payload: data,
});
export const deleteAllTodos = () => ({ type: DELETE_ALL_TODOS });
