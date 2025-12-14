import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

const todos = [
    { id: 1, title: 'Wakeup' },
    { id: 2, name: 'Complete NextJS Upskill' }
  ];
export async function GET(request: NextRequest) {
      return new Response(JSON.stringify(todos), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
}

export async function POST(request: Request) {
    const { title } = await request.json();
    const newTodo = { id: todos.length + 1, title };
    todos.push(newTodo);
    return new Response(JSON.stringify(newTodo), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });
}