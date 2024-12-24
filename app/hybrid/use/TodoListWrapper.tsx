"use client";

import TodoList, { Todo } from "@/components/TodoList";
import { use } from "react";

export default function TodoListWrapper({
  todoPromise,
}: {
  todoPromise: Promise<Array<Todo>>;
}) {
  const todo = use(todoPromise);
  return <TodoList todos={todo}></TodoList>;
}
