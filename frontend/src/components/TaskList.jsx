import TaskItem from "./TaskItem.jsx";

export default function TaskList({
  items,
  onDelete,
  onEdit,
  onSave,
  editingId,
}) {
  if (!items.length) return <p>No tasks found.</p>;
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {items.map((t) => (
        <TaskItem
          key={t._id}
          task={t}
          onDelete={onDelete}
          onEdit={onEdit}
          onSave={onSave}
          isEditing={editingId === t._id}
        />
      ))}
    </div>
  );
}
