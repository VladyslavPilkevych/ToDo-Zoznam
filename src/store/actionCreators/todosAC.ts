import { Dispatch } from 'react';
import { ITodo, IData } from '../../types/types';
import { todosActionTypes } from '../../types/todoReducerTypes';
import { TodosAction } from '../../types/todoReducerTypes';
import { AxiosResponse, AxiosError } from 'axios';
import * as api from '../../api/api';

export const getAllTodos = () => {
  return async (dispatch: Dispatch<TodosAction>): Promise<void> => {
    await api
      .getAllTodoList()
      .then((rsp: AxiosResponse) => {
        if (rsp.status === 200) {
          dispatch({ type: todosActionTypes.GET_ALL_TODOS, payload: rsp.data });
        }
      })
      .catch((error: Error | AxiosError) => {
        console.error(error);
      });
  };
};
export const changeTodoCompleted = (data: ITodo) => {
  return async (dispatch: Dispatch<TodosAction>): Promise<void> => {
    try {
      dispatch({
        type: todosActionTypes.CHANGE_TODO_COMPLETED,
        payload: data.id,
      });
      await api.putTodoInfo(data);
    } catch (error) {
      console.error(error);
    }
  };
};
export const createNewTodo =
  (data: ITodo) =>
  async (dispatch: Dispatch<TodosAction>): Promise<void> => {
    await api
      .postTodo(data)
      .then((res) => {
        dispatch({
          type: todosActionTypes.CREATE_NEW_TODO,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
export const deleteTodo =
  (data: number) =>
  async (dispatch: Dispatch<TodosAction>): Promise<void> => {
    dispatch({
      type: todosActionTypes.DELETE_TODO,
      payload: data,
    });
    await api
      .deleteTodo(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
