import "../assets/styles/Filters.css";

export default function Filters({ value = {}, onChange }) {
  const set = (patch) => onChange({ ...value, ...patch });

  return (
    <div className="filters">
      <input
        placeholder="Search title"
        value={value.q || ""}
        onChange={(e) => set({ q: e.target.value })}
      />

      <select
        value={value.status}
        onChange={(e) => set({ status: e.target.value })}
      >
        <option value="">All Statuses</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <select
        value={value.priority}
        onChange={(e) => set({ priority: e.target.value })}
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>


      <label>
        Completed:
        <select
          value={value.completed}
          onChange={(e) => set({ completed: e.target.value })}
        >
          <option value="">All</option>
          <option value="true">Completed</option>
          <option value="false">Incomplete</option>
        </select>
      </label>
    </div>
  );
}
