"use server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function increment(previousState: number, formData: FormData) {
  return previousState + 1;
}
