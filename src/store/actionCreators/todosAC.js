import {
  GET_ALL_TODOS,
  CREATE_NEW_TODO,
  DELETE_ALL_TODOS,
} from '../actions/todosActions';

export const getAllTodos = (data) => ({
  type: GET_ALL_TODOS,
});
export const createNewTodo = (data) => ({
  type: CREATE_NEW_TODO,
  payload: data,
});
export const deleteAllTodos = () => ({ type: DELETE_ALL_TODOS });
