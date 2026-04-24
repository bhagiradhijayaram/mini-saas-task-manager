import pool from "../config/db.js";

// Create Task
export const createTask = async (title, userId) => {
  if (!title) throw new Error("Title is required");

  const [result] = await pool.query(
    "INSERT INTO tasks (title, user_id) VALUES (?, ?)",
    [title, userId]
  );

  return {
    id: result.insertId,
    title,
    status: "pending",
  };
};

// Get Tasks
export const getTasks = async (userId) => {
  const [rows] = await pool.query(
    "SELECT * FROM tasks WHERE user_id = ? ORDER BY id DESC",
    [userId]
  );

  return rows;
};

// Update Task
export const updateTask = async (id, status, userId) => {
  if (!id || !status) throw new Error("Invalid update data");

  const [result] = await pool.query(
    "UPDATE tasks SET status=? WHERE id=? AND user_id=?",
    [status, id, userId]
  );

  if (result.affectedRows === 0) {
    throw new Error("Task not found or unauthorized");
  }

  return { id, status };
};

// Delete Task
export const deleteTask = async (id, userId) => {
  if (!id) throw new Error("Task ID is required");

  const [result] = await pool.query(
    "DELETE FROM tasks WHERE id=? AND user_id=?",
    [id, userId]
  );

  if (result.affectedRows === 0) {
    throw new Error("Task not found or unauthorized");
  }

  return { id };
};