import axios from 'axios';
import { ITodo } from '../types/types';

const BASE_URL = 'https://6329bad84c626ff832c8cfb7.mockapi.io/api/todos/todos';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export function getAllTodoList() {
  return api.get(BASE_URL);
}
export function postTodo(data: ITodo) {
  return api.post(BASE_URL, data);
}
export function putTodoInfo(data: ITodo) {
  return api.put(`${BASE_URL}/${data.id}`, data);
}
export function deleteTodo(todoId: number) {
  return api.delete(`${BASE_URL}/${todoId}`);
}
