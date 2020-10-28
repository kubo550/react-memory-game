import Board from "./Board";
import Popup from "./Popup";
import { createPlayableArray, withDelay } from "../functions";

// prettier-ignore
export const rawArray = [
  "wino", "piwo", "wódka", "rum", "ziółko", "feta", "kuciel", "adam", "blant", 
  "kuflowe", "wojak", "szlugi", "młodyG", "pedał", "cwel",
];
const readyArray = createPlayableArray(rawArray);

export { Board, Popup, readyArray, withDelay };
