"use client";

import { useQuery } from "@tanstack/react-query";

interface TestValue {
  message: string;
  timestamp: string;
  randomvalue: number;
}

const fetchSuccessData = async (): Promise<TestValue> => {
  const delay = 500 + Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return {
    message: "Success",
    timestamp: new Date().toISOString(),
    randomvalue: Math.floor(Math.random() * 100),
  };
};

const fetchErrorData = async (): Promise<TestValue> => {
  const delay = 500 + Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  throw new Error("의도적으로 발생시킨 에러입니다.");
};

function SuccessQueryComponent() {
  const { data, isLoading, error, status } = useQuery({
    queryKey: ["success"],
    queryFn: fetchSuccessData,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  // 이 시점부터는 data가 존재한다는 것을 보장받을 수 있다.
  // isSuccess === true와 동일
  // state === 'success'와 동일
  return (
    <div>
      <h2>Success Query Test Component</h2>

      <p>status: {status}</p>

      {data && (
        <>
          <p>Message: {data.message}</p>
          <p>Timestamp: {data.timestamp}</p>
          <p>Random Value: {data.randomvalue}</p>
        </>
      )}
    </div>
  );
}

function ErrorQueryComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["error"],
    queryFn: fetchErrorData,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2>Error Query Test Component</h2>

      {data && (
        <>
          <p>Message: {data.message}</p>
          <p>Timestamp: {data.timestamp}</p>
          <p>Random Value: {data.randomvalue}</p>
        </>
      )}
    </div>
  );
}

export default function QueriesExamplePage() {
  return (
    <div>
      <h1>React Queries Concept Test Page</h1>
      <SuccessQueryComponent />
      <ErrorQueryComponent />
    </div>
  );
}
