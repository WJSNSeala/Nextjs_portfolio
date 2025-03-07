"use client";

import { fetchErrorData, fetchSuccessData } from "@/libs/react-query/test-data";
import { useMutation } from "@tanstack/react-query";

function MutationStateResetExample() {
  const mutation = useMutation({
    mutationFn: fetchErrorData,
  });

  const handleClick = () => mutation.reset();

  return (
    <div>
      <button onClick={() => mutation.mutate()}>Trigger Mutation</button>
      <h5>{mutation.status}</h5>
      {mutation.error && <h5>{mutation.error.message}</h5>}
      <button onClick={handleClick}>Reset Mutation State</button>
    </div>
  );
}

export default function MutationsExamplePage() {
  return (
    <div>
      <h1>React Mutation Concept Test Page</h1>

      <h2>Mutation State Reset Example</h2>
      <MutationStateResetExample />
    </div>
  );
}
