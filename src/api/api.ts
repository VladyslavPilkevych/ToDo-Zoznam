import axios from 'axios';
import { ITodo } from '../types/types';

const BASE_URL = 'https://6329bad84c626ff832c8cfb7.mockapi.io/todos';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export function getAllTodoList() {
  return api.get(BASE_URL);
}
export function getExactTodoInfo(todoId: number) {
  return api.get(`${BASE_URL}/:${todoId}`);
}
export function postTodo(data: ITodo) {
  return api.post(BASE_URL, data);
}

export function putTodoInfo(todoId: number, data: ITodo) {
  return api.put(`${BASE_URL}/:${todoId}`, data);
}

export function deleteTodo(todoId: number) {
  console.log(todoId);
  return api.delete(`${BASE_URL}/:${todoId}`);
}
