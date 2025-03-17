import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import type { ShoppingItem, ShoppingListState } from "../lib/types";
import { generateShoppingListInitData } from "../lib/utils";

const initialState: ShoppingListState = {
  items: generateShoppingListInitData(),
};

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    /**
     * Adds new shopping item to the list of "items"
     * @param ShoppingItem The full object of item to be added
     */
    addItem: (state, action: PayloadAction<ShoppingItem>) => {
      state.items.push(action.payload);
    },
    /**
     * Updates the contents of one of the items on the list based on the received index
     * @param item - The new value of the shopping item
     */
    updateItem: (state, action: PayloadAction<ShoppingItem>) => {
      const index = state.items.findIndex(
        (value) => value.id === action.payload.id
      );
      if (index) {
        state.items[index].name = action.payload.name;
        state.items[index].amount = action.payload.amount;
      }
    },
    /**
     * Removes an item from the shopping list
     * @param string - The ID of the item in the array
     */
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((value) => value.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, removeItem } = shoppingListSlice.actions;

export const selectShoppingListItems = (state: RootState) =>
  state.shoppingList.items;

export default shoppingListSlice.reducer;
