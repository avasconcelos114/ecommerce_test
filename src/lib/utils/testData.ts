import type { ShoppingItem } from "../types";

const TEST_DATA_TO_POPULATE = [
  "Milk",
  "Eggs",
  "Beef",
  "Pork",
  "Carrots",
  "Onions",
  "Potatoes",
  "Fish",
  "Broccoli",
  "Rice",
  "Bread",
  "Cheese",
  "Cat Food",
  "Chips",
  "Chocolate",
  "Crackers",
  "Pasta",
  "Tomatoes",
  "Tomato Sauce",
  "Tuna",
  "Ham",
  "Lettuce",
  "Butter",
  "Flour",
  "Sugar",
  "Salt",
  "Spices",
];

export function generateShoppingListInitData(): ShoppingItem[] {
  const result: ShoppingItem[] = [];

  const MIN_NUM_ITEMS = 5;
  const MAX_NUM_ITEMS = 15;
  const numberOfIterations =
    Math.floor(Math.random() * (MAX_NUM_ITEMS - MIN_NUM_ITEMS + 1)) +
    MIN_NUM_ITEMS;
  const addedIndexes: number[] = [];

  for (let i = 0; i < numberOfIterations; i++) {
    const randomIdx = Math.floor(Math.random() * TEST_DATA_TO_POPULATE.length);
    if (!addedIndexes.includes(randomIdx)) {
      const id = crypto.randomUUID();
      const MAX_AMOUNT = 5;
      result.push({
        id,
        name: TEST_DATA_TO_POPULATE[randomIdx],
        amount: Math.floor(Math.random() * MAX_AMOUNT) + 1,
      });

      addedIndexes.push(randomIdx);
    }
  }
  return result;
}
