export interface TestValue {
  message: string;
  timestamp: string;
  randomvalue: number;
}

export const fetchSuccessData = async (): Promise<TestValue> => {
  const delay = 500 + Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  return {
    message: "Success",
    timestamp: new Date().toISOString(),
    randomvalue: Math.floor(Math.random() * 100),
  };
};

export const fetchErrorData = async (): Promise<TestValue> => {
  const delay = 500 + Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  throw new Error("의도적으로 발생시킨 에러입니다.");
};
