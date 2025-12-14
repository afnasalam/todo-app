interface Todo {
  id: number;
  title?: string;
  name?: string;
}

export default async function TodoPage() {
  // Fetch todos from the API route
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiToken = process.env.API_TOKEN;
  const response = await fetch(`${baseUrl}/api/todo?sort=name`, {
    cache: 'no-store' // Ensure fresh data on each request
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  
  const todos: Todo[] = await response.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="space-y-2">
        {apiToken}
        {todos.map((todo) => (
          <li key={todo.id} className="p-4 border rounded">
            <p className="font-semibold">ID: {todo.id}</p>
            <p>{todo.title || todo.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

