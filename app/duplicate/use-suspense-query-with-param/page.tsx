'use client'

import TodoList, { Todo } from "@/components/TodoList";
import { fetchTodo } from "@/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from 'next/navigation'

export default function UseSuspenseQueryWithParamPage() {
  const searchParams = useSearchParams()
  console.log("UseSuspenseQueryWithParamPage rendering", searchParams);

  const query = useSuspenseQuery<Array<Todo>>({
    queryKey: ["todos"],
    queryFn: async () => {
      return await fetchTodo();
    },
  });

  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        useSuspenseQuery - with useSearchParams
      </h1>
      <TodoList todos={query.data}></TodoList>
    </div>
  );
}