import TodoList from "@/components/TodoList";
import { fetchTodo } from "@/utils";

export default async function FetchPage() {
  console.log("FetchPage rendering");
  const todoList = await fetchTodo();
  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        fetch
      </h1>
      <TodoList todos={todoList}></TodoList>
    </div>
  );
}
