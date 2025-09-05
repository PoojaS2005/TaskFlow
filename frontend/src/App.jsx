import { useEffect, useState } from "react";
import { listTasks, createTask, updateTask, deleteTask } from "./api";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import Filters from "./components/Filters.jsx";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
  q: "",
  status: "",
  priority: "",
  dueBefore: "",
  dueAfter: "",
  completed: ""
});

  const [editing, setEditing] = useState(null);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await listTasks(filters);
      setTasks(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filters]);

  const handleCreate = async (payload) => {
    const created = await createTask(payload);
    setTasks((prev) => [created, ...prev]);
  };

  const handleUpdate = async (id, payload) => {
    const updated = await updateTask(id, payload);
    setTasks((prev) => prev.map((t) => (t._id === id ? updated : t)));
    setEditing(null);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1>Task Handler</h1>
      <Filters value={filters} onChange={setFilters} />
      <TaskForm onSubmit={handleCreate} />
      {loading ? (
        <p>Loading…</p>
      ) : (
        <TaskList
          items={tasks}
          onDelete={handleDelete}
          onEdit={setEditing}
          onSave={handleUpdate}
          editingId={editing?.id}
        />
      )}
    </div>
  );
}
