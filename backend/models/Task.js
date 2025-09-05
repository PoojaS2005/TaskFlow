import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    status: { 
      type: String, 
      enum: ["todo", "in-progress", "done"], 
      default: "todo" 
    },
    priority: { 
      type: String, 
      enum: ["low", "medium", "high"], 
      default: "medium" 
    },
    dueDate: Date,
    completed: { type: Boolean, default: false } // keep for backward compatibility
  },
  { timestamps: true }
);

// export default mongoose.model("Task", taskSchema);

const Task = mongoose.model("Task", taskSchema);

export default Task;
