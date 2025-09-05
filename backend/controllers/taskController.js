import Task from "../models/Task.js";

// @desc Get all tasks with filters
// @route GET /api/tasks
export const getTasks = async (req, res) => {
  try {
    const { q, status, priority, completed } = req.query; // ⬅ removed dueBefore, dueAfter

    const filter = {};

    if (q) {
      filter.title = { $regex: q, $options: "i" };
    }

    if (status) {
      filter.status = status;
    }

    if (priority) {
      filter.priority = priority;
    }

    if (completed !== undefined) {
      filter.completed = completed === "true";
    }

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};


// @desc Create a task
// @route POST /api/tasks
export const createTask = async (req, res) => {
  try {

    const { title, description, status, priority, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      status: status || "todo",
      priority: priority || "medium",
      dueDate: dueDate ? new Date(dueDate) : null,
      completed: false,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("❌ Error creating task:", error.message);
    res.status(400).json({ message: "Invalid Task Data" });
  }
};



// @desc Update a task
// @route PUT /api/tasks/:id
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = req.body.title ?? task.title;
    task.description = req.body.description ?? task.description;
    task.status = req.body.status ?? task.status;
    task.priority = req.body.priority ?? task.priority;
    task.dueDate = req.body.dueDate ? new Date(req.body.dueDate) : task.dueDate;
    task.completed =
      req.body.completed !== undefined ? req.body.completed : task.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: "Invalid Task Data" });
  }
};

// @desc Delete a task
// @route DELETE /api/tasks/:id
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne();
    res.json({ message: "Task removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
