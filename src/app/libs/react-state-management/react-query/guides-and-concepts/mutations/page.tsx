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
    onSettled: () => {
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

function MutationCallbackAwaitExample() {
  const mutation = useMutation({
    mutationFn: fetchSuccessData,
    onSuccess: async () => {
      console.log("I'm first!");
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });

  return (
    <div>
      <button onClick={() => mutation.mutate()}>Trigger Mutation</button>
      <h5>{mutation.status}</h5>
      {mutation.isSuccess && <h5>{mutation.data.message}</h5>}
    </div>
  );
}

function MutateFunctionCallbackExample() {
  // 먼저 실행됨
  const mutation = useMutation({
    mutationFn: fetchSuccessData,
    onSuccess: () => console.log("1. useMutation onSuccess"),
    onError: () => console.log("1. useMutation onError"),
    onSettled: () => console.log("1. useMutation onSettled"),
  });

  // 나중에 실행됨

  return (
    <div>
      <button
        onClick={() =>
          mutation.mutate(undefined, {
            onSuccess: () => console.log("2. mutate onSuccess"),
            onError: () => console.log("2. mutate onError"),
            onSettled: () => console.log("2. mutate onSettled"),
          })
        }
      >
        Trigger Mutation
      </button>
      <h5>{mutation.status}</h5>
      {mutation.isSuccess && <h5>{mutation.data.message}</h5>}
    </div>
  );
}

function ConsecutiveMutationExample() {
  const mutation = useMutation({
    mutationFn: fetchSuccessData,
    onSuccess: () => console.log("1. useMutation onSuccess"),
    onError: () => console.log("1. useMutation onError"),
    onSettled: () => console.log("1. useMutation onSettled"),
  });

  const handleClick = () => {
    const test = [1, 2, 3];

    test.forEach((item) => {
      mutation.mutate(undefined, {
        onSuccess: () => console.log(`2. mutate onSuccess ${item}`),
      });
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Trigger Mutation</button>
      <h5>{mutation.status}</h5>
      {mutation.isSuccess && <h5>{mutation.data.message}</h5>}
    </div>
  );
}

export default function MutationsExamplePage() {
  return (
    <div>
      <h1>React Mutation Concept Test Page</h1>

      <h2>Mutation State Reset Example</h2>
      <MutationStateResetExample />

      <h2>Mutaion Optimistic update and rollback example</h2>
      <MutationOptimisticUpdateExample />

      <h2>Mutation callback async/await</h2>
      <MutationCallbackAwaitExample />

      <h2>Mutation callback execution order</h2>
      <MutateFunctionCallbackExample />

      <h2>Consecutive Mutation Example</h2>
      <ConsecutiveMutationExample />
    </div>
  );
}
