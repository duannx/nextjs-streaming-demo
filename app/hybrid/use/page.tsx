import { fetchTodo } from "@/utils";
import TodoListWrapper from "./TodoListWrapper";

export default async function UsePage() {
  console.log("UsePage rendering");
  const todoPromise = fetchTodo();

  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        use
      </h1>
      <TodoListWrapper todoPromise={todoPromise}></TodoListWrapper>
    </div>
  );
}
