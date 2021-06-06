const baseUrl = 'https://arcane-everglades-72731.herokuapp.com/api';

export const apiAddTask = () => `${baseUrl}/todo/create/`;
export const apiGetTasks = () => `${baseUrl}/todos/`;
export const apiGetUserTasks = (userId) => `${baseUrl}/todos/${userId}/`;
export const apiUpdateTask = (taskId) => `${baseUrl}/todo/${taskId}/update/`;
