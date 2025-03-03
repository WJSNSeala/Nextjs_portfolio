// my-api.ts

// Todo 타입 정의
export interface Todo {
  id: number;
  title: string;
  completed?: boolean;
  userId?: number;
}

// todos 목록을 가져오는 함수
export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
};

// 새로운 todo를 생성하는 함수
export const postTodo = async (newTodo: Todo): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newTodo.title,
      completed: newTodo.completed || false,
      userId: newTodo.userId || 1, // 기본 userId 설정
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  return response.json();
};

// 선택적: 특정 todo 가져오기
export const getTodoById = async (id: number): Promise<Todo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch todo with id ${id}`);
  }

  return response.json();
};

// 선택적: todo 업데이트하기
export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todo.title,
        completed: todo.completed,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to update todo with id ${todo.id}`);
  }

  return response.json();
};

// 선택적: todo 삭제하기
export const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to delete todo with id ${id}`);
  }
};
