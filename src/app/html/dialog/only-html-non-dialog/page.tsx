"use client";

import { PageStyle } from "@/styles/layout/page.css";
import { useEffect, useRef } from "react";

export default function HTMLDialogTestPage() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.addEventListener("close", () => {
        console.log("Dialog closed");
        console.log(dialogRef.current!.returnValue);
      });
    }
  }, []);

  return (
    <div className={PageStyle}>
      <h1>Dialog Test Page</h1>

      <dialog open ref={dialogRef}>
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button value={"ok"}>OK</button>
          <button value={"close"}>Close</button>
        </form>
      </dialog>
    </div>
  );
}
