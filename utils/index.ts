export function delay(ms: number) {
  return new Promise((res) => {
    console.log(`delaying for ${ms}ms`);
    setTimeout(res, ms);
  });
}

export async function fetchTodo() {
  console.log("fetching Todo");
  await delay(5000);
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await res.json();
  console.log("done fetching Todo", response.length);
  return response;
}