"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function MyComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ border: "2px solid black" }}>
      {mounted &&
        createPortal(
          <p>This child is placed in the document body.</p>,
          document.body
        )}
      <p>This child is placed in the parent div.</p>
    </div>
  );
}

function TestPortalEventPropagation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleParentClick = () => {
    console.log("Parent div clicked");
  };

  const handlePortalClinck = () => {
    console.log("Portal child clicked");
  };

  return (
    <div onClick={handleParentClick} style={{ border: "2px solid red" }}>
      <p>This is a Propagation parent div.</p>
      {mounted &&
        createPortal(
          <p onClick={handlePortalClinck}>
            This child is placed in the document body.
          </p>,
          window.document.body
        )}
    </div>
  );
}

function NoPortalModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div
      style={{ border: "2px solid green", width: "100px", overflow: "hidden" }}
    >
      <button
        onClick={handleOpen}
        style={{
          marginBottom: "10px",
          backgroundColor: "lightblue",
        }}
      >
        Open Modal with clip style
      </button>
      {isOpen && (
        <div style={{ border: "2px solid blue" }}>
          <p>This is a modal without portal.</p>
          <button onClick={handleClose}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

function PortalModalExample() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div
      style={{ border: "2px solid green", width: "100px", overflow: "hidden" }}
    >
      <button
        onClick={handleOpen}
        style={{ marginBottom: "10px", backgroundColor: "lightblue" }}
      >
        Open Modal with portal
      </button>
      {isOpen &&
        mounted &&
        createPortal(
          <div style={{ border: "2px solid blue" }}>
            <p>This is a modal with portal.</p>
            <button onClick={handleClose}>Close Modal</button>
          </div>,
          document.body
        )}
    </div>
  );
}

function ModalExampe() {
  return (
    <div>
      <h2>Modal Example</h2>
      <NoPortalModalExample />
      <PortalModalExample />
    </div>
  );
}

export default function PortalExample() {
  return (
    <div>
      <h1>Portal Example</h1>
      <MyComponent />
      <TestPortalEventPropagation />

      <ModalExampe />
    </div>
  );
}
