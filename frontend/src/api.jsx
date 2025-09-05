import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

export const listTasks = (params = {}) =>
  api.get("/tasks", { params }).then((r) => r.data);
export const getTask = (id) => api.get(`/tasks/${id}`).then((r) => r.data);
export const createTask = (data) =>
  api.post("/tasks", data).then((r) => r.data);
export const updateTask = (id, data) =>
  api.put(`/tasks/${id}`, data).then((r) => r.data);
export const deleteTask = (id) =>
  api.delete(`/tasks/${id}`).then((r) => r.data);

export default api;
