import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500  p-6">
      <div className="w-[500] space-y-4">
        <div className="flex justify-center relative ">
          <button
            onClick={() => navigate(-1)}
            className=" absolute top-0 left-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>

          <h1 className=" text-4xl font-bold text-white text-center">
            Detalhes da tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className=" text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
