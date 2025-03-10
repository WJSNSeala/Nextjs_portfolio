"use client";

import { useRef } from "react";
import { AnimatedDialogStyle } from "./animation-dialog.css";

export default function DialogAnimationTestPage() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <h1>Dialog Test Page</h1>

      <dialog ref={dialogRef} className={AnimatedDialogStyle}>
        <button
          autoFocus
          onClick={() => {
            if (dialogRef.current) {
              dialogRef.current.close();
            }
          }}
        >
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
      <button
        onClick={() => {
          if (dialogRef.current) {
            dialogRef.current.showModal();
          }
        }}
      >
        Show the dialog
      </button>
    </div>
  );
}
