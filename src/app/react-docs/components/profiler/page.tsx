"use client";

import { profilerPage } from "./proflier-page.css";
import { useState, memo, useMemo, useEffect } from "react";
import { Profiler } from "react";

const generateLargeDateset = (size: number) => {
  return Array.from({ length: size }, (_, index) => ({
    id: index,
    name: `Item ${index}`,
    value: Math.random() * 1000,
    timeStamp: new Date().toISOString(),
    status: Math.random() > 0.5 ? "active" : "inactive",
    tags: Array.from({ length: 5 }, (_, index) => `Tag ${index}`),
    metadata: {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: Math.floor(Math.random() * 10),
    },
  }));
};

const initialData = generateLargeDateset(1000);

export default function ReactComponentProfilerPage() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(initialData);

  const heavyCalculation = (items: typeof data) => {
    return items
      .filter((item) => item.status === "active")
      .sort((a, b) => a.value - b.value)
      .map((item) => ({
        ...item,
        score: item.value * Math.random(),
        processedTags: item.tags.filter((tag) => tag.includes(String(counter))),
        complexCalculation: Array.from({ length: 100 }, () =>
          Math.random()
        ).reduce((a, b) => a + b, 0),
      }));
  };

  // 4. 주기적인 데이터 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
      // 데이터의 일부를 무작위로 업데이트
      setData((prevData) => {
        const newData = [...prevData];
        const randomIndex = Math.floor(Math.random() * newData.length);
        newData[randomIndex] = {
          ...newData[randomIndex],
          value: Math.random() * 1000,
          timeStamp: new Date().toISOString(),
        };
        return newData;
      });
    }, 1000); // 1초마다 업데이트

    return () => clearInterval(interval);
  }, []);

  const UnoptimizedComponent = () => {
    // 매 렌더링마다 무거운 계산 수행
    const processedData = heavyCalculation(data);

    return (
      <div>
        <h2>Unoptimized Component (Items: {processedData.length})</h2>
        {processedData.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <p>Value: {item.value.toFixed(2)}</p>
            <p>Score: {item.score.toFixed(2)}</p>
            <p>Tags: {item.processedTags.join(", ")}</p>
            <p>Complex: {item.complexCalculation}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={profilerPage}>
      <h1>React Component Profiler Page</h1>

      <div className="controls">
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment Counter ({counter})
        </button>
        <button onClick={() => setData(generateLargeDateset(1000))}>
          Regenerate Data
        </button>
        <button
          onClick={() => {
            // 데이터 일부만 업데이트
            setData((prev) => {
              return prev.map((item) => ({
                ...item,
                timestamp: new Date().toISOString(),
              }));
            });
          }}
        >
          Update All Timestamps
        </button>
      </div>
      <Profiler
        id="unoptimized"
        onRender={(id, phase, actualDuration) => {
          console.log(`${id} [${phase}] took ${actualDuration}ms`);
        }}
      >
        <UnoptimizedComponent />
      </Profiler>
    </div>
  );
}
