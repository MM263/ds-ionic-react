import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "./types";

type SliceState = Expense[];

const initialExpenses = [
  {
    name: "Hearty Breakfast",
    date: new Date("2021-04-05T22:49:22Z"),
    cost: 20,
    category: "Food and drinks",
    notes: "Yum",
  },
];

const slice = createSlice({
  name: "expenses",
  initialState: initialExpenses as SliceState,
  reducers: {
    add: (state, action: PayloadAction<Expense>) => {
      state = [...state, action.payload];
    },
    clear: (state) => {
      state = [];
    },
  },
});

export const { add, clear } = slice.actions;
export default slice.reducer;
