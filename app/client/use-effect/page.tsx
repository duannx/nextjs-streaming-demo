'use client'

import TodoList from "@/components/TodoList";
import { fetchTodo } from "@/utils";
import { useEffect, useState } from "react";

export default function UseEffectPage() {
  console.log("UseEffectPage rendering");
  const [data, setData] = useState()

  useEffect(()=>{
    fetchTodo().then(setData)
  }, [])

  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        useEffect
      </h1>
      <TodoList todos={data}></TodoList>
    </div>
  );
}