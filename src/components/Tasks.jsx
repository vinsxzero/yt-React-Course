import { ChevronRightIcon } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ task, onTaskClick, onDeleteTaskClick }) {
  const query = new URLSearchParams();
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className=" flex  flex-col gap-2 p-6 bg-slate-200 shadow rounded-md">
      {task.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={` bg-slate-400  text-left w-full text-white p-2 rounded-md ${
              task.done ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
