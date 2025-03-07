"use client";

import { fetchErrorData, fetchSuccessData } from "@/libs/react-query/test-data";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

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

function MutationOptimisticUpdateExample() {
  const [count, setCount] = useState(0);

  const mutationHandy = useMutation({
    mutationFn: fetchErrorData,
    onMutate: (variables) => {
      // A mutation is about to happen!
      console.log("what is variables? ", variables);
      console.log("on mutate functino inner");
      console.log("assume that counts updated successfully");
      setCount((prev) => prev + 1);
      // Optionally return a context containing data to use when for example rolling back
      return { count: 1 };
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update with id ${context?.count}`);
      console.log("rollback count");
      setCount((prev) => prev - 1);
    },
    onSuccess: (data, variables, context) => {
      // Boom baby!
      console.log("on success function inner");
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
      console.log("on settled function inner");
    },
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => mutationHandy.mutate()}>Trigger Mutation</button>
      <h5>{mutationHandy.status}</h5>
      {mutationHandy.error && <h5>{mutationHandy.error.message}</h5>}
    </div>
  );
}

export default function MutationsExamplePage() {
  return (
    <div>
      <h1>React Mutation Concept Test Page</h1>

      <h2>Mutation State Reset Example</h2>
      <MutationStateResetExample />

      <h2>Mutaion handy state functions</h2>
      <MutationOptimisticUpdateExample />
    </div>
  );
}
