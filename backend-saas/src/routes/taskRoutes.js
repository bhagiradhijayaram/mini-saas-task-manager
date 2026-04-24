import express from "express";
import {
  addTask,
  fetchTasks,
  updateTaskStatus,
  removeTask,
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/", addTask);
router.get("/", fetchTasks);
router.put("/:id", updateTaskStatus);
router.delete("/:id", removeTask);

export default router;
