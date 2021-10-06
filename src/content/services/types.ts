import { ReactElement } from "react";

export type SortingTypes = {
  name: string;
  strategy: () => ReactElement;
};
export enum SortingStatus {
  NOT_PROCESSED,
  PROCESSING,
  PROCESSED,
}
