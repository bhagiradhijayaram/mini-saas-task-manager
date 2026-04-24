import { useEffect, useState, useContext } from "react";
import { api } from "../services/api";
import { AuthContext } from "../context/AuthContext";

import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const { user } = useContext(AuthContext);

  const loadTasks = async () => {
    const data = await api("/tasks");
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;
    await api("/tasks", "POST", { title });
    setTitle("");
    loadTasks();
  };

  const toggleTask = async (task) => {
    await api(`/tasks/${task.id}`, "PUT", {
      status: task.status === "pending" ? "completed" : "pending",
    });
    loadTasks();
  };

  const deleteTask = async (id) => {
    await api(`/tasks/${id}`, "DELETE");
    loadTasks();
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto py-6 px-4 xl:px-0">
        <div>
          <h3 className="text-4xl font-semibold leading-snug">
            Welcome, {user?.name || "User"} <br />
            How can I help you today?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-6 py-10 items-start">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-semibold mb-4">Add Task</h4>

            <div className="flex flex-col gap-3">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                placeholder="New task..."
              />

              <button
                onClick={addTask}
                className="bg-[#1F6F5F] hover:bg-[#1a5d4f] text-white py-2 rounded-lg transition"
              >
                Add Task
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl  border border-gray-200">
            <h4 className="text-lg font-semibold mb-4">Your Tasks</h4>

            <div className="space-y-3 max-h-[500px] overflow-y-auto">
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-sm text-center py-9">
                  No tasks yet
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
