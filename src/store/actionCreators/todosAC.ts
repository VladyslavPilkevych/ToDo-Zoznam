import {
  GET_ALL_TODOS,
  UPDATE_TODO_LIST,
  CREATE_NEW_TODO,
  FILTER_TODO_LIST,
  FILTER_SEARCH_INPUT,
  FILTER_COMPLETE_TODOS,
  DELETE_ALL_TODOS,
} from '../actions/todosActions';
import { Dispatch } from 'react';
import { ITodo, IData, IUpdateData } from '../../types/types';
import { getAllTodoList } from '../../api/api';
import { AxiosResponse, AxiosError } from 'axios';

// export const getAllTodos = (data: ITodo[]) => ({
//   type: GET_ALL_TODOS,
//   payload: data,
// });
export const getAllTodos = () => async (dispatch: Dispatch<any>) => {
  // console.log(typeof dispatch);  
  await getAllTodoList()
    .then((rsp: AxiosResponse<any>) => {
      console.log(rsp);
      if (rsp.status === 200) {
        dispatch({ type: GET_ALL_TODOS, payload: rsp.data });
      }
    })
    .catch((err: AxiosError<any>) => {
      // dispatch(addNewError(err));
      console.log(err);
      // .catch(() => {
      // toast.error('Something went wrong');
    });
};
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
