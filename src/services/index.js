const baseUrl = 'http://127.0.0.1:8000/api';

export const apiAddTask = () => `${baseUrl}/todo/create/`;
export const apiGetTasks = () => `${baseUrl}/todos/`;
export const apiGetUserTasks = (userId) => `${baseUrl}/todos/${userId}/`;
export const apiUpdateTask = (taskId) => `${baseUrl}/todo/${taskId}/update/`;
