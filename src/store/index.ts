import { configureStore } from "@reduxjs/toolkit";
import shoppingList from "./shoppingList";

export const store = configureStore({
  reducer: {
    shoppingList,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
