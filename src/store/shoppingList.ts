import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface ShoppingItem {
  name: string;
  amount: number;
}

interface ShoppingListState {
  items: ShoppingItem[];
}

const initialState: ShoppingListState = {
  items: [],
};

export const counterSlice = createSlice({
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
     * @param index - The index of item to be updated
     * @param item - The new value of the shopping item
     */
    updateItem: (
      state,
      action: PayloadAction<{ index: number; item: ShoppingItem }>
    ) => {
      const { item, index } = action.payload;
      state.items[index].name = item.name;
      state.items[index].amount = item.amount;
    },
    /**
     * Removes an item from the shopping list
     * @param number - The index of the item in the array (normally would use a unique "ID" but using index for simplicity)
     */
    removeItem: (state, action: PayloadAction<number>) => {
      const indexToRemove = action.payload;
      state.items.slice(indexToRemove, indexToRemove + 1);
    },
  },
});

export const actions = counterSlice.actions;

export const selectShoppingListItems = (state: RootState) =>
  state.shoppingList.items;

export default counterSlice.reducer;
