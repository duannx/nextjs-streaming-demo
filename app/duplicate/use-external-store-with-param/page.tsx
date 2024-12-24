"use client";

import TodoList from "@/components/TodoList";
import { useRef, useSyncExternalStore } from "react";
import todoStore from "./todoStore";
import { useSearchParams } from "next/navigation";

export default function UseExternalStoreWithParamPage() {
  const searchParams = useSearchParams();
  console.log("UseExternalStoreWithParamPage rendering", searchParams);
  
  const subscribeFunc = useRef(todoStore.subscribe.bind(todoStore));
  const getSnapShotFunc = useRef(todoStore.getSnapShot.bind(todoStore));
  const data = useSyncExternalStore(
    subscribeFunc.current,
    getSnapShotFunc.current,
    getSnapShotFunc.current
  );
  if (!data) {
    throw todoStore.doFetch();
  }
  return (
    <div>
      <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        useSyncExternalStore - with useSearchParams
      </h1>
      <TodoList todos={data}></TodoList>
    </div>
  );
}
