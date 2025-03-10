import { createStore } from "zustand/vanilla";

export interface BearState {
  bears: number;
}

export interface BearActions {
  increase: (by: number) => void;
}

export type BearStore = BearState & BearActions;

export const useBearStore = createStore<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));

export const DefaultBearState = {
  bears: 0,
};

export const createBearStore = (initialState: BearState = DefaultBearState) => {
  return createStore<BearStore>((set) => ({
    ...initialState,
    increase: () => set((state) => ({ bears: state.bears + 1 })),
  }));
};
