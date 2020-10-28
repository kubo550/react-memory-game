import { v4 as uuid } from "uuid";

export const createPlayableArray = arr => {
  let array = [...arr, ...arr];
  let count = array.length;

  while (count) {
    const index = Math.floor(Math.random() * count--);
    [array[count], array[index]] = [array[index], array[count]];
  }
  array = array.map(item => ({
    id: uuid(),
    item,
    playable: true,
  }));

  return array;
};

export const withDelay = fn => setTimeout(fn, 600);
