export const getRandomNumberInRange = (min, max, previous) => {
  let newNumber;
  do newNumber = Math.floor(Math.random() * (max - min + 1) + min);
  while (newNumber === previous);
  return newNumber;
};
