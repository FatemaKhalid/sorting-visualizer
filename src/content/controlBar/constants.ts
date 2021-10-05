import { InsertionSort, Sorter } from "../sorting";

export type SortingTypes = {
  name: string;
  strategy?: Sorter;
};
export const SORTING_ALGO: SortingTypes[] = [
  { name: "Insertion Sort", strategy: new InsertionSort() },
  { name: "Bubble Sort" },
];
export const INIT_LENGTH = 30;
