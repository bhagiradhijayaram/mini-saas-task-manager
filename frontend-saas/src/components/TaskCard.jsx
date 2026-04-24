export default function TaskCard({ task, onToggle, onDelete }) {
  const formattedStatus =
    task.status.charAt(0).toUpperCase() + task.status.slice(1);

  return (
    <div className="flex justify-between bg-white p-3 rounded shadow mb-2">
      <span
        className={`${
          task.status === "completed" ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task)}
          className={`h-8 min-w-[90px] px-3 rounded flex items-center justify-center text-white transition
    ${
      task.status === "completed"
        ? "bg-green-500 hover:bg-green-600"
        : "bg-yellow-500 hover:bg-yellow-600"
    }
  `}
        >
          {formattedStatus}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white h-8 min-w-[60px] px-3 rounded flex items-center justify-center"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
