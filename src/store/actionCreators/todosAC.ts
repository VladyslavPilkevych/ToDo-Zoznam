// import {
//   GET_ALL_TODOS,
//   CHANGE_TODO_COMPLETED,
//   CREATE_NEW_TODO,
//   FILTER_TODO_LIST,
//   FILTER_SEARCH_INPUT,
//   FILTER_COMPLETE_TODOS,
//   DELETE_TODO,
// } from '../actions/todosActions';
// import { Dispatch } from 'react';
import { ITodo, IData, IUpdateData } from '../../types/types';
import { todosActionTypes } from '../../types/todoReducerTypes';
// import { AxiosResponse, AxiosError } from 'axios';
// import { AnyAction } from 'redux';
// import * as api from '../../api/api';

// export const getAllTodos = () =>
//   async (dispatch: Dispatch<AnyAction>): Promise<void> => {
//     await api
//       .getAllTodoList()
//       .then((rsp: AxiosResponse<any>) => {
//         console.log(rsp);
//         if (rsp.status === 200) {
//           dispatch({ type: GET_ALL_TODOS, payload: rsp.data });
//         }
//       })
//       .catch((err: AxiosError<any>) => {
//         console.log(err);
//       });
//   };
export const getAllTodos = (data: ITodo[]) => ({
  type: todosActionTypes.GET_ALL_TODOS,
  payload: data,
});
// export const updateTodoList = (data: IUpdateData) => ({
//   type: UPDATE_TODO_LIST,
//   payload: data,
// });
export const changeTodoCompleted = (data: number) => ({
  type: todosActionTypes.CHANGE_TODO_COMPLETED,
  payload: data,
});
// export const createNewTodo = (data: ITodo) => async (dispatch: Dispatch<AnyAction>) => {
//   try {
//     const todoData = await api.postTodo(data);
//     dispatch({ type: CREATE_NEW_TODO, payload: todoData });
//   } catch (e) {
//     console.log(e);
//   }
// };
export const createNewTodo = (data: ITodo) => ({
  type: todosActionTypes.CREATE_NEW_TODO,
  payload: data,
});
// export const deleteTodo = (data: number) => async (dispatch: Dispatch<AnyAction>) => {
//   try {
//     const todoData = await api.deleteTodo(data);
//     dispatch({ type: DELETE_TODO, payload: todoData });
//   } catch (e) {
//     console.log(e);
//   }
// };
export const filterTodoList = (data: IData) => ({
  type: todosActionTypes.FILTER_TODO_LIST,
  payload: data,
});
export const liveSearchInputFilter = (data: string) => ({
  type: todosActionTypes.FILTER_SEARCH_INPUT,
  payload: data,
});
export const changeFilterCompleteTodos = (data: boolean | null) => ({
  type: todosActionTypes.FILTER_COMPLETE_TODOS,
  payload: data,
});
export const deleteTodo = (data: number) => ({
  type: todosActionTypes.DELETE_TODO,
  payload: data,
});
