"use client";

import { useActionState } from "react";
import { increment } from "./example-increment.action";

export default function ExampleForm() {
  const [state, formAction] = useActionState(increment, 1);

  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  );
}
