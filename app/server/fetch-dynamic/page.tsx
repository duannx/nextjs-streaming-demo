import TodoList from "@/components/TodoList";
import { fetchTodo } from "@/utils";

export default async function FetchPageDynamic({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>,
}) {
  const { id } = await searchParams

  console.log("FetchPageDynamic rendering", id);
  const todoList = await fetchTodo();
  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        fetch - dynamic rendering
      </h1>
      <TodoList todos={todoList}></TodoList>
    </div>
  );
}
