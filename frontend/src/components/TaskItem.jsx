import { useState, useEffect } from "react";
import "../assets/styles/TaskItem.css";

export default function TaskItem({
  task,
  onDelete,
  onEdit,
  onSave,
  isEditing,
}) {
  const [form, setForm] = useState({
    ...task,
    dueDate: task.dueDate ? task.dueDate.slice(0, 10) : "",
status: task.status || "todo",
priority: task.priority || "medium",

  });

  useEffect(() => {
    setForm({
      ...task,
      dueDate: task.dueDate ? task.dueDate.slice(0, 10) : "",
status: task.status || "todo",
priority: task.priority || "medium",

    });
  }, [task]);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSave = () => {
    const payload = { ...form };
    if (payload.dueDate)
      payload.dueDate = new Date(payload.dueDate).toISOString();
    onSave(task._id, payload);
  };

  const isOverdue =
    task.dueDate && new Date(task.dueDate) < new Date() && task.status !== "done";

  return (
    <div className={`task-card ${isOverdue ? "overdue" : ""}`}>
      {isEditing ? (
        <div className="task-edit">
          <input name="title" value={form.title} onChange={handleChange} />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <div className="task-edit-row">
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
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
          <div className="task-buttons">
            <button className="save-btn" onClick={handleSave}>Save</button>
            <button className="cancel-btn" onClick={() => onEdit(null)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="task-view">
          <b className="task-title">{task.title}</b>
          <small className="task-meta">
            Status: <span className={`status ${task.status}`}>{task.status}</span> • 
            Priority: <span className={`priority ${task.priority}`}>{task.priority}</span> • 
            Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "—"}
          </small>
          {task.description && <p className="task-desc">{task.description}</p>}
          <div className="task-buttons">
            <button className="edit-btn" onClick={() => onEdit({ id: task._id })}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(task._id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}
