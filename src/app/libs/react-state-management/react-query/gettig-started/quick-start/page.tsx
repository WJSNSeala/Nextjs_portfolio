"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos, postTodo } from "./my-api";

export default function CoreConceptsExamplePage() {
  return <Todos />;
}

function Todos() {
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
      alert("Todo added!");
    },
  });

  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
