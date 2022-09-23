import axios from 'axios';

const BASE_URL = 'https://6329bad84c626ff832c8cfb7.mockapi.io';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export function getAllTodoList() {
  return api.get(`${BASE_URL}/todos`);
}
export function getExactTodoInfo(todoId: number) {
  return api.get(`${BASE_URL}/todos/:${todoId}`);
}
export function postTodoList() {
  return api.post(`${BASE_URL}/todos`);
}

export function putTodoInfo(todoId: number) {
  return api.put(`${BASE_URL}/todos/:${todoId}`);
}

export function deleteTodo(todoId: number) {
  return api.delete(`${BASE_URL}/todos/:${todoId}`);
}
