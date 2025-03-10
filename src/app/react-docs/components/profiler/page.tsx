"use client";

import { profilerPage } from "./proflier-page.css";
import { useState, useEffect, useMemo, memo } from "react";
import { Profiler } from "react";

function expensiveOperation() {
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += (i * 17) % 100; // 고정된 연산
  }
  return result;
}

function UnoptimizedComponent() {
  const value = expensiveOperation();
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    value: value + i,
  }));

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          Item {item.id}: {item.value}
        </div>
      ))}
    </div>
  );
}

const OptimizedComponent = memo(function OptimizedComponent() {
  const value = useMemo(() => expensiveOperation(), []);
  const items = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        value: value + i,
      })),
    [value]
  );

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          Item {item.id}: {item.value}
        </div>
      ))}
    </div>
  );
});

export default function ReactComponentProfilerPage() {
  const [trigger, setTrigger] = useState(0);

  // 의미 없는 리렌더링 유발
  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={profilerPage}>
      <h1>React Component Profiler Page</h1>
      <div className="controls">
        <button onClick={() => setTrigger((prev) => prev + 1)}>
          Increment Counter ({trigger})
        </button>
      </div>
      <div style={{ display: "flex", gap: 10, flexDirection: "row" }}>
        <Profiler
          id="unoptimized"
          onRender={(id, phase, actualDuration, basDuration) => {
            console.log(
              `${id} [${phase}] took ${actualDuration}ms (base: ${basDuration}ms)`
            );
          }}
        >
          <UnoptimizedComponent />
        </Profiler>
        <Profiler
          id="optimized"
          onRender={(id, phase, actualDuration, basDuration) => {
            console.log(
              `${id} [${phase}] took ${actualDuration}ms (base: ${basDuration}ms)`
            );
          }}
        >
          <OptimizedComponent />
        </Profiler>
      </div>
    </div>
  );
}
