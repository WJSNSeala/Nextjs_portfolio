"use client";

import { useBearStore } from "./BearStoreProvider";

export default function ZustandGetStartPage() {
  const { bears, increase } = useBearStore((state) => state);
  return (
    <div>
      <h1>zustand official docs quick start implementation</h1>
      <p>Bear populations: {bears}</p>
      <button onClick={() => increase(1)}>one up</button>
    </div>
  );
}
