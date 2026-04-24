import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../models/taskModel.js";

// Add Task
export const addTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ msg: "Title is required" });
    }

    await createTask(title, req.user.id);

    res.json({ msg: "Task added" });
  } catch (err) {
    console.log("ADD ERROR:", err.message);
    res.status(500).json({ msg: err.message });
  }
};

// Get Tasks
export const fetchTasks = async (req, res) => {
  try {
    const tasks = await getTasks(req.user.id); 

    res.json(tasks);
  } catch (err) {
    console.log("FETCH ERROR:", err.message);
    res.status(500).json({ msg: err.message });
  }
};

// Update Task
export const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    await updateTask(req.params.id, status, req.user.id);

    res.json({ msg: "Updated" });
  } catch (err) {
    console.log("UPDATE ERROR:", err.message);
    res.status(500).json({ msg: err.message });
  }
};

// Delete Task
export const removeTask = async (req, res) => {
  try {
    await deleteTask(req.params.id, req.user.id);

    res.json({ msg: "Deleted" });
  } catch (err) {
    console.log("DELETE ERROR:", err.message);
    res.status(500).json({ msg: err.message });
  }
};