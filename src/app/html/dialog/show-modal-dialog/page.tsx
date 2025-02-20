"use client";

import { PageStyle } from "@/styles/layout/page.css";
import { useRef } from "react";
import { DialogStyle } from "../dialog.css";

export default function HTMLDialogTestPage() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className={PageStyle}>
      <h1>Dialog Test Page</h1>

      <dialog ref={dialogRef} className={DialogStyle}>
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
