import { fetchTodo } from "@/utils";
import TodoListWrapper from "./TodoListWrapper";

export const dynamic = 'force-dynamic'
export default async function UseDynamicPage() {
  console.log("UseDynamicPage rendering");
  const todoPromise = fetchTodo();

  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        use - dynamic rendering
      </h1>
      <TodoListWrapper todoPromise={todoPromise}></TodoListWrapper>
    </div>
  );
}
