import { ReactElement } from "react";
import { SelectionSort } from "../sorting";

export type SortingTypes = {
  name: string;
  strategy: () => ReactElement;
};
export enum SortingStatus {
  NOT_PROCESSED,
  PROCESSING,
  PROCESSED,
}
export const SORTING_ALGO: SortingTypes[] = [
  { name: "Insertion Sort", strategy: SelectionSort },
  { name: "Selection Sort", strategy: SelectionSort },
];
export const INIT_LENGTH = 8;
