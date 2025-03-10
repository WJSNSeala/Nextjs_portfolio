"use client";

import { createContext, useRef, useContext, type ReactNode } from "react";
import { useStore } from "zustand";

import { type BearStore, createBearStore } from "./example.store";

export type BearStoreApi = ReturnType<typeof createBearStore>;

export const BearStoreContext = createContext<BearStoreApi | undefined>(
  undefined
);

export interface BearStoreProviderProps {
  children: ReactNode;
}

export const BearStoreProvider = ({ children }: BearStoreProviderProps) => {
  const storeRef = useRef<BearStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createBearStore();
  }

  return (
    <BearStoreContext.Provider value={storeRef.current}>
      {children}
    </BearStoreContext.Provider>
  );
};

export const useBearStore = <T,>(selector: (store: BearStore) => T): T => {
  const bearStoreContext = useContext(BearStoreContext);

  if (!bearStoreContext) {
    throw new Error("useBearStore must be used within a BearStoreProvider");
  }

  return useStore(bearStoreContext, selector);
};
