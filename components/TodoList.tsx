"use client";

import React from "react";
import { CheckCircle, Circle, Trash2 } from "lucide-react";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos?: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">My Todo List</h2>
        </div>

        {/* Todo Items */}
        <div className="divide-y divide-gray-200">
          {!todos ? (
            <div className="px-6 py-4">Fetching Todo...</div>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors group"
              >
                <button
                  className="flex-shrink-0 text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label={
                    todo.completed ? "Mark as incomplete" : "Mark as complete"
                  }
                >
                  {todo.completed ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </button>

                <span
                  className={`flex-1 text-gray-700 ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.title}
                </span>

                <button
                  className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Delete todo"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
