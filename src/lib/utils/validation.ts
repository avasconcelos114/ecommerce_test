// Simple regex that only allows alphabetic characters and digits
// In a production environment we would opt for something more robuts like an explicit blacklisting of special characters
// To avoid issues with non-latin characters being blocked as is the case here
const NAME_VALIDATION_REGEX = /^[a-z\d\s]+$/i;

export function validateShoppingItemName(name: string) {
  return NAME_VALIDATION_REGEX.test(name);
}
