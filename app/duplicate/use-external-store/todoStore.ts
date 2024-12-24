import { Todo } from "@/components/TodoList";
import { fetchTodo } from "@/utils";

class TodoStore {
  private todo: Array<Todo> | undefined;
  private fetchTodo: (() => Promise<Array<Todo>>) | undefined;
  private subscribers: Array<() => void>;
  constructor(fetchTodo: () => Promise<Array<Todo>>) {
    this.fetchTodo = fetchTodo;
    this.subscribers = [];
  }
  subscribe(callback: () => void) {
    if (!this.fetchTodo) return () => {};
    this.subscribers.push(callback);
    return () => {};
  }
  getSnapShot() {
    return this.todo;
  }
  doFetch() {
    if (!this.fetchTodo) return;
    return this.fetchTodo().then((data) => {
      this.todo = data;
      this.subscribers.forEach((callback) => {
        callback();
      });
    });
  }
}

const todoStore = new TodoStore(fetchTodo);
export default todoStore;
