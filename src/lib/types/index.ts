export interface ShoppingItem {
  id: string;
  name: string;
  amount: number;
}

export interface ShoppingListState {
  items: ShoppingItem[];
}
