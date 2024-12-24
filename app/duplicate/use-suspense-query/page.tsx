'use client'

import TodoList, { Todo } from "@/components/TodoList";
import { fetchTodo } from "@/utils";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function UseSuspenseQueryPage() {
  console.log("UseSuspenseQueryPage rendering");
  const query = useSuspenseQuery<Array<Todo>>({
    queryKey: ["todos"],
    queryFn: async () => {
      return await fetchTodo();
    },
  });

  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        useSuspenseQuery
      </h1>
      <TodoList todos={query.data}></TodoList>
    </div>
  );
}