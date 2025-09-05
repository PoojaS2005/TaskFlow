import { useState } from "react";
import "../assets/styles/TaskForm.css";

const DEFAULT = {
  title: "",
  description: "",
  status: "todo",
  priority: "medium",
  dueDate: "",
};

export default function TaskForm({ onSubmit }) {
  const [form, setForm] = useState(DEFAULT);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form };
    // Convert to ISO string only if date is filled
    if (payload.dueDate) {
      const date = new Date(payload.dueDate);
      date.setHours(23, 59, 59, 999); // set end of day for dueDate
      payload.dueDate = date.toISOString();
    }

    await onSubmit(payload);
    setForm(DEFAULT);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="task-form"
    >
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Task Description"
        value={form.description}
        onChange={handleChange}
      />

      <div className="task-form-row">
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <select name="priority" value={form.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn-primary">Add Task</button>
    </form>
  );
}
