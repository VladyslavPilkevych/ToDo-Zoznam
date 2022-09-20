import { GET_ALL_TODOS, DELETE_ALL_TODOS } from '../actions/todosActions';

export const getAllTodos = (data) => ({
  type: GET_ALL_TODOS,
  payload: data,
});
export const deleteAllTodos = () => ({ type: DELETE_ALL_TODOS });
