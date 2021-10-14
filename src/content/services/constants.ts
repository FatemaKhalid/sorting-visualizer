import { SelectionSort } from "../sorting";
import { SortingStatus, SortingTypes } from "./types";

export const SORTING_ALGO: SortingTypes[] = [
  // { name: "Insertion Sort", strategy: SelectionSort },
  { name: "Selection Sort", strategy: SelectionSort },
];
export const INIT_LENGTH = 8;
export const INIT_SORTING_STATUS = Array.from(
  { length: INIT_LENGTH },
  () => SortingStatus.NOT_PROCESSED
);
