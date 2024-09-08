import { create } from "zustand";

const countStore = create((set) => ({
  count: 100,
  increamentCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decreamentCount: () =>
    set((state) => ({
      count: state.count - 1,
    })),
}));

export default countStore;
